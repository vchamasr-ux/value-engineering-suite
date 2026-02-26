import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, intent, module_interest, source_cta, referrer, url, timestamp } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const smtpUser = 'vchamasr@gmail.com';
    const smtpPass = 'kxgvcrecjibdxdxs'; // Removed spaces for Gmail App Password

    if (!smtpUser || !smtpPass) {
        throw new Error("SMTP credentials are required but missing.");
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Value Engineering Suite" <${smtpUser}>`,
            to: 'vchamasr@gmail.com',
            subject: `New Lead: ${email} - ${intent}`,
            html: `
        <h1>New Lead Submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Intent:</strong> ${intent}</p>
        <p><strong>Module Interest:</strong> ${Array.isArray(module_interest) ? module_interest.join(', ') : module_interest}</p>
        <p><strong>From CTA:</strong> ${source_cta}</p>
        <hr />
        <p><strong>Referrer:</strong> ${referrer}</p>
        <p><strong>Page URL:</strong> ${url}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
      `
        });

        return res.status(200).json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ error: 'Failed to send email: ' + error.message });
    }
}
