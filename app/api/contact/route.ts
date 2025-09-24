import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  // Create a Nodemailer transporter using your email service's SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use 'true' for port 465, 'false' for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env.local
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
        await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: process.env.RECIPIENT_EMAIL, // list of receivers
        subject: `Contact Form Submission: ${subject}`, // Subject line
        // text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `, // html body
      });
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error(error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}