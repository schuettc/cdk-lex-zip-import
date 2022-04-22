import { ResourceProps, RemovalPolicy } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

interface S3UploadProps extends ResourceProps {
  sourceDirectory: string;
}

export class S3Upload extends Construct {
  public lexZipBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: S3UploadProps) {
    super(scope, id);

    this.lexZipBucket = new s3.Bucket(this, 'lexZipBucket', {
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new s3deploy.BucketDeployment(this, 'lexZipBucketDeploy', {
      sources: [s3deploy.Source.asset(props.sourceDirectory)],
      destinationBucket: this.lexZipBucket,
    });
  }
}
