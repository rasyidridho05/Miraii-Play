// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const formData: FormData = req.body;

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  try {
    // Kirim email
    const info = await transporter.sendMail({
      from: formData.email, // Gunakan alamat email pengirim dari formulir
      to: 'm.rasyid.r05@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`,
    });

    console.log('Message sent:', info.response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false });
  }
}
