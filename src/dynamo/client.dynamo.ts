import {DynamoDBClient, DynamoDBClientConfig} from "@aws-sdk/client-dynamodb"
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb"

const config: DynamoDBClientConfig = {
    region: "us-east-1"
}
const client = new DynamoDBClient(config)
const docClient = DynamoDBDocumentClient.from(client)

export default docClient