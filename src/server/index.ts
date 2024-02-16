import { router } from "./trpc";
import aws from "aws-sdk"
import { nanoid } from 'nanoid'
import { uploadImage } from "./blog/upload-image";

const s3 = new aws.S3({
   region: process.env.AWS_REGION,
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export const generateUplaodURL = async () => {
   const date = new Date()
   const imageName = `${nanoid()}-${date.getTime()}.jpeg`

   return await s3.getSignedUrlPromise('putObject', {
      Bucket: 'cyclic-clumsy-teal-beret-ap-south-1',
      key: imageName,
      Expires: 1000,
      ContentType: "image/jpeg"
   })
}
export const appRouter = router({
   "upload-image": uploadImage
});

export type AppRouter = typeof appRouter;
