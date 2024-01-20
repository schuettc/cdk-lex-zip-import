/* eslint-disable @typescript-eslint/indent */
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { CustomResource, ResourceProps } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface LexImportCustomResourceProps extends ResourceProps {
  readonly uid: string;
  readonly lexZipBucket?: s3.Bucket;
  readonly lexRoleArn?: string;
  readonly function: string;
  readonly resourceArn?: string;
  readonly policy?: object;
}
/**
 * Adds "action" functionality to the Policy Statement
 *
 * @private
 */
export class LexImportCustomResource extends Construct {
  public readonly lambda: lambda.IFunction;
  public readonly lexImport: CustomResource;

  constructor(
    scope: Construct,
    id: string,
    props: LexImportCustomResourceProps,
  ) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    if (props.lexZipBucket) {
      props.lexZipBucket.grantRead(this.lambda);
    }

    const LexImportProvider = new cr.Provider(this, 'LexImportProvider', {
      onEventHandler: this.lambda,
    });

    const lexProps = {
      uid: props.uid,
      lexZipBucket: props.lexZipBucket?.bucketName,
      lexRoleArn: props.lexRoleArn,
      function: props.function,
      resourceArn: props.resourceArn,
      policy: JSON.stringify(props.policy),
    };

    this.lexImport = new CustomResource(this, 'LexImportCustomResource', {
      serviceToken: LexImportProvider.serviceToken,
      properties: lexProps,
    });
  }

  private ensureLambda(): lambda.Function {
    const stack = cdk.Stack.of(this);
    const constructName = 'LexImportCustomResource';
    const existing = stack.node.tryFindChild(constructName);
    if (existing) {
      return existing as lambda.Function;
    }

    const lexCustomResourceRole = new iam.Role(this, 'lexCustomResourceRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        ['lambdaPolicy']: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              resources: ['*'],
              actions: [
                'lex:UpdateSlot',
                'lex:ListBots',
                'lex:UpdateBotAlias',
                'lex:DeleteCustomVocabulary',
                'lex:DeleteBotVersion',
                'lex:DeleteBotChannel',
                'lex:CreateResourcePolicy',
                'lex:UpdateBotLocale',
                'lex:ListBotAliases',
                'lex:CreateCustomVocabulary',
                'lex:CreateBotLocale',
                'lex:DeleteIntent',
                'lex:StartImport',
                'lex:UpdateSlotType',
                'lex:BuildBotLocale',
                'lex:CreateBot',
                'lex:DeleteBotAlias',
                'lex:CreateIntent',
                'lex:CreateUploadUrl',
                'lex:DeleteBot',
                'lex:CreateBotAlias',
                'lex:CreateSlotType',
                'lex:DeleteBotLocale',
                'lex:UpdateCustomVocabulary',
                'lex:UpdateResourcePolicy',
                'lex:CreateSlot',
                'lex:DeleteSlot',
                'lex:UpdateBot',
                'lex:DeleteSlotType',
                'lex:UpdateIntent',
                'lex:DeleteResourcePolicy',
                'lex:DescribeImport',
                'iam:PassRole',
              ],
            }),
          ],
        }),
      },
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    const fn = new lambda.Function(stack, constructName, {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(path.join(__dirname, '../resources')),
      handler: 'index.handler',
      architecture: lambda.Architecture.ARM_64,
      role: lexCustomResourceRole,
      timeout: cdk.Duration.minutes(1),
    });

    return fn;
  }
}
