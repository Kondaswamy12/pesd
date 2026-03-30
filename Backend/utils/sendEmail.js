import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to,
      subject,
      html: htmlContent,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email.");
  }
};

export default sendEmail;