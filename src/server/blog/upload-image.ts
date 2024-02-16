import { generateUplaodURL } from "../index";
import { publicProcedure } from "../trpc";

export const uploadImage = publicProcedure.query(async () => {
  return generateUplaodURL().then(url => ({
    status: 200,
    uploadURL: url
  }))
  .catch(err => ({
    status: 500,
    uploadURL: null
  }))
  ;
});
