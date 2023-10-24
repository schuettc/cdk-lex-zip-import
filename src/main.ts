import * as path from 'path';
import {
  App,
  Stack,
  StackProps,
  Duration,
  CustomResource,
  Names,
  CfnOutput,
} from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

interface LexProps extends StackProps {}

export class Lex extends Stack {
  public readonly lexBotId: string;
  public readonly lexBotAliasId: string;

  constructor(scope: Construct, id: string, props: LexProps) {
    super(scope, id, props);

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

    const lexRole = new iam.Role(this, 'lexRole', {
      assumedBy: new iam.ServicePrincipal('lex.amazonaws.com'),
      inlinePolicies: {
        ['lexPolicy']: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              resources: ['*'],
              actions: ['polly:SynthesizeSpeech', 'comprehend:DetectSentiment'],
            }),
          ],
        }),
      },
    });

    const lexDeployLambda = new lambda.Function(this, 'lexDeployLambda', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(path.join(__dirname, '../resources/lexBot')),
      handler: 'index.handler',
      architecture: lambda.Architecture.ARM_64,
      timeout: Duration.minutes(1),
      role: lexCustomResourceRole,
    });

    const uid: string = Names.uniqueId(this);

    const LexResourceProvider = new cr.Provider(this, 'LexResourceProvider', {
      onEventHandler: lexDeployLambda,
    });

    const lexBot = new CustomResource(this, 'LexCustomResource', {
      serviceToken: LexResourceProvider.serviceToken,
      properties: { uid: uid, lex_role_arn: lexRole.roleArn },
    });

    new CfnOutput(this, 'bot_id', { value: lexBot.getAttString('bot_id') });
    new CfnOutput(this, 'bot_alias_id', {
      value: lexBot.getAttString('bot_alias_id'),
    });

    this.lexBotId = lexBot.getAttString('bot_id');
    this.lexBotAliasId = lexBot.getAttString('bot_alias_id');
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new Lex(app, 'LexDeploy', { env: devEnv });

app.synth();
