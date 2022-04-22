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
    });

    this.botId = lexBotImport.lexImportCustomResource.getAttString('bot_id');
    this.botAliasId =
      lexBotImport.lexImportCustomResource.getAttString('bot_alias_id');
  }
}
