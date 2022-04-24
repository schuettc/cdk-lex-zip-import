import * as cdk from 'aws-cdk-lib';
import { ImportBot } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('Normal', () => {
  const bot = new ImportBot(stack, 'Normal', {
    sourceDirectory: './resources',
    lexRoleArn: 'arn',
  });
  const resourceArn = `arn:aws:lex:${stack.region}:${stack.account}:bot-alias/${bot.botId}/${bot.botAliasId}`;

  const policy = {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'AllowChimePstnAudioUseBot',
        Effect: 'Allow',
        Principal: { Service: 'voiceconnector.chime.amazonaws.com' },
        Action: 'lex:StartConversation',
        Resource: resourceArn,
        Condition: {
          StringEquals: { 'AWS:SourceAccount': `${stack.account}` },
          ArnEquals: {
            'AWS:SourceArn': `arn:aws:voiceconnector:us-east-1:${stack.account}:*`,
          },
        },
      },
    ],
  };
  bot.addResourcePolicy(resourceArn, policy);
});
