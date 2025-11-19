import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send a basic email
export async function sendMail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject,
      html
    });

    console.log("📨 Email sent:", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("❌ Email error:", err);
    return { success: false, error: err.message };
  }
}

// Example email templates
export function verificationEmail(name, code) {
  return `
    <h2>Hello ${name},</h2>
    <p>Thank you for registering at <strong>Your Friendly Researchers</strong>.</p>
    <p>Your verification code is:</p>
    <h3 style="color: #4f46e5;">${code}</h3>
    <p>This code is valid for 10 minutes.</p>
  `;
}

export function podcastApprovalEmail(name, title) {
  return `
    <h2>Hello ${name},</h2>
    <p>Your podcast titled <strong>${title}</strong> has been <span style="color:green"><strong>APPROVED</strong></span>!</p>
    <p>It is now live on the website 🎉</p>
  `;
}
