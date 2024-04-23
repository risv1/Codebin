import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const s3 = new AWS.S3();

export function UploadS3(fileName: string, fileData: string) {
  try {
    const params = {
      Bucket: "code-bin",
      Key: fileName,
      Body: fileData,
    };

    s3.upload(params, (err: Error, data: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File uploaded successfully!, Location: ${data.Location}`);
      }
    });
  } catch (e) {
    console.error(e);
  }
}

export function FetchOneS3(fileName: string): Promise<string> | undefined {
  try {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: "code-bin",
        Key: fileName,
      };

      s3.getObject(params, (err: Error, data: any) => {
        if (err) {
          reject(err);
        } else {
          if (data && data.Body) {
            resolve(data.Body.toString());
          } else {
            reject(new Error("Invalid response from S3"));
          }
        }
      });
    });
  } catch (e) {
    console.error(e);
  }
}
