import {APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2} from "aws-lambda/trigger/api-gateway-proxy";

export async function lambda(e: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
    console.log(e)

    return {
        statusCode: 200,
        body: JSON.stringify({
            hello: "world"
        })
    }
}
