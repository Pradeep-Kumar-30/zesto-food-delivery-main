import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

const initCloudinary = () => {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.warn('⚠️  Cloudinary credentials missing — image upload will be disabled.');
    return false;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  })

  console.log('✅ Cloudinary config loaded:', {
    name: process.env.CLOUDINARY_CLOUD_NAME,
    key: process.env.CLOUDINARY_API_KEY ? 'set' : 'missing',
    secret: process.env.CLOUDINARY_API_SECRET ? 'set' : 'missing'
  })
  return true;
}

const cloudinaryReady = initCloudinary()

const uploadOnCloudinary = async (file) => {
  if (!cloudinaryReady) {
    if (fs.existsSync(file)) fs.unlinkSync(file)
    throw new Error('Cloudinary is not configured. Please add CLOUDINARY credentials to .env')
  }
  try {
    const result = await cloudinary.uploader.upload(file)
    if (fs.existsSync(file)) fs.unlinkSync(file)
    return result.secure_url
  } catch (error) {
    if (fs.existsSync(file)) fs.unlinkSync(file)
    console.error('Cloudinary upload failed:', error)
    throw error
  }
}

export default uploadOnCloudinary