import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});
console.log("cloud:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("key:", process.env.CLOUDINARY_API_KEY);
console.log("secret:", process.env.CLOUDINARY_API_SECRET);


export default cloudinary.v2;
