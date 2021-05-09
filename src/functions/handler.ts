import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'This is a serverless app',
            input: event
        })
    }
}