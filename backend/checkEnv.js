import dotenv from 'dotenv';
const result = dotenv.config({override:true});
console.log('dotenv result error', result.error);
console.log('CLOUDINARY_CLOUD_NAME', process.env.CLOUDINARY_CLOUD_NAME);
console.log('CLOUDINARY_API_KEY', process.env.CLOUDINARY_API_KEY);
console.log('CLOUDINARY_API_SECRET', process.env.CLOUDINARY_API_SECRET);
console.log('CLOUDINARY_URL', process.env.CLOUDINARY_URL);
