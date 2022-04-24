import * as cdk from 'aws-cdk-lib';
import { Hello, Bot } from '../src';

test('hello', () => {
  expect(new Hello().sayHello()).toBe('hello, world!');
});

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('Normal', () => {
  new Bot(stack, 'Normal', {
    sourceDirectory: './resources',
    lexRoleArn: 'arn',
  });
});
