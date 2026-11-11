import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

let transporter = null;
if (process.env.EMAIL && process.env.PASS) {
  transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  console.log("✅ Nodemailer initialized");
} else {
  console.warn("⚠️  Email credentials missing — mail features will be disabled.");
}

export const sendOtpMail = async (to, otp) => {
    if (!transporter) {
        console.warn("Mail not sent (no email config):", { to, otp });
        return;
    }
    await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject: "Reset Your Password",
        html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
}

export const sendDeliveryOtpMail = async (user, otp) => {
    if (!transporter) {
        console.warn("Delivery OTP (no email config):", { to: user?.email, otp });
        return;
    }
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "Delivery OTP",
        html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
}
