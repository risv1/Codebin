import jwt from 'jsonwebtoken';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, 'token') as string;
    if (!token) {
      return {
        statusCode: 401,
        message: 'Unauthorized',
      };
    }

    const user = jwt.verify(token, 'secret');
    if (!user) {
      return {
        statusCode: 401,
        message: 'Unauthorized',
      };
    }

    const body = await readBody(event);

    const params = {
      Bucket: 'code-bin',
      Key: body.key,
      Expires: 60
    };

    const url = await s3.getSignedUrlPromise('getObject', params);

    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 401,
      message: 'Unauthorized',
    };
  }
});