import ec2 from 'aws-cdk-lib/aws-ec2';
import ecs from 'aws-cdk-lib/aws-ecs';
import ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import cdk from 'aws-cdk-lib';
import path from "path";


export class FargateApplicationLoadBalancedServiceStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC and Fargate Cluster
    // NOTE: Limit AZs to avoid reaching resource quotas
    const vpc = new ec2.Vpc(this, 'MyVpc', { maxAzs: 2 });
    const cluster = new ecs.Cluster(this, 'Cluster', { vpc });

    // Instantiate Fargate Service with just cluster and image
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "FargateService", {
      cluster,
      taskImageOptions: {
        containerPort: 8080,
        image: ecs.ContainerImage.fromAsset(path.join(__dirname, "..")),
      },
    });
  }
}
