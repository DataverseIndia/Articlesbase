// import axios from "axios"

// export const uploadImage = (img: File) => {
//    let imgUrl = null;

//    axios.get("http://localhost:3000/api/trpc/upload-image").then( ({ data: { uploadURl }}) => {
//       axios({
//          method: 'PUT',
//          url: uploadURl,
//          headers: { 'Content-Type': 'multipart/form-data' },
//          data: img
//       })
//       .then(() => {
//          imgUrl = uploadURl.split("?")[0]
//       })
//    })
// }

import { trpc } from "../_trpc/client";

interface UploadImageResponse {
  status: number;
  uploadURL: string | null;
}

export const uploadImage = async (img: File) => {
   let imgUrl: string | null = null;

   try {
      const result = await trpc["upload-image"].useQuery<UploadImageResponse>();

      if (result.data) {
         imgUrl = result.data.uploadURL ?? null;

         if (!imgUrl) {
            throw new Error("Upload URL is null or empty");
         }

         const formData = new FormData();
         formData.append('file', img);

         await fetch(imgUrl, {
            method: 'PUT',
            body: formData
         });

         imgUrl = imgUrl.split("?")[0];
      } else if (result.error) {
         throw new Error(result.error.message);
      } else {
         throw new Error("Unknown error occurred");
      }
   } catch (error) {
      console.error('Error uploading image:', error);
   }

   return imgUrl;
};

