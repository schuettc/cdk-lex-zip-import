import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LexImportCustomResource } from './customResource';
import { S3Upload } from './s3upload';
/**
 * Props for `LexBotImport`.
 */
export interface LexBotProps {
  /**
   * Zip File location (required)
   *    @default - None
   */
  readonly sourceDirectory: string;
  readonly lexRoleArn: string;
}

export class Bot extends Construct {
  public readonly botId: string;
  public readonly botAliasId: string;

  constructor(scope: Construct, id: string, props: LexBotProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const upload = new S3Upload(this, 'lexZipBucket', {
      sourceDirectory: props.sourceDirectory,
    });

    const lexBotImport = new LexImportCustomResource(this, 'LexBotImport', {
      uid: uid,
      lexZipBucket: upload.lexZipBucket,
      lexRoleArn: props.lexRoleArn,
      function: 'importBot',
    });

    // new LexImportCustomResource(this, 'LexBotImport', {
    //   uid: uid,
    //   lexZipBucket: upload.lexZipBucket.bucketName,
    // });

    this.botId = lexBotImport.lexImport.getAttString('bot_id');
    this.botAliasId = lexBotImport.lexImport.getAttString('bot_alias_id');
  }
  addResourcePolicy(resourceArn: string, policy: string) {
    const result = new LexImportCustomResource(
      this,
      'resourcePolicyAssociation',
      {
        resourceArn,
        policy,
        uid: cdk.Names.uniqueId(this),
        function: 'addResourcePolicy',
      },
    );
    return result;
  }
}
