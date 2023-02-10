#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FargateApplicationLoadBalancedServiceStack } from '../lib/fargate-application-load-balanced-service-stack';

const app = new cdk.App();
new FargateApplicationLoadBalancedServiceStack(app, 'FargateApplicationLoadBalancedServiceStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});