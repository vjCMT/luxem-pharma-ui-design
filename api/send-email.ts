import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Sirf POST requests ko allow karein
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  // 2. Environment variables ko load karein aur check karein
  const { EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, ADMIN_EMAIL } = process.env;

  if (!EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD || !ADMIN_EMAIL) {
    console.error("ERROR: Missing required environment variables in .env.local");
    return res.status(500).json({ success: false, message: "Server configuration error." });
  }

  // 3. Frontend se bheje gaye data ko validate karein
  const { firstName, lastName, email, subject, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // 4. Nodemailer transporter banayein
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD, // App Password yahan use hoga
    },
  });

  // 5. Emails ka content banayein
  const mailToAdmin = {
    from: `"${fullName}" <${EMAIL_SERVER_USER}>`,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `<p>You have a new contact form submission</p><br>
           <p><strong>Name: </strong> ${fullName}</p>
           <p><strong>Email: </strong> ${email}</p>
           <p><strong>Subject: </strong> ${subject}</p>
           <p><strong>Message: </strong> ${message}</p>`,
  };

  const mailToUser = {
    from: `"Madrid Pharmaceutical" <${EMAIL_SERVER_USER}>`,
    to: email,
    subject: "We've received your message!",
    html: `<p>Hi ${firstName},</p>
           <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
           <p>Best regards,<br>The Madrid Pharmaceutical Team</p>`,
  };

  // 6. Emails bhejne ki koshish karein
  try {
    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(mailToUser);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("[EMAIL_SEND_ERROR]", error);
    return res.status(500).json({ success: false, message: "Failed to send email. Please try again later." });
  }
}