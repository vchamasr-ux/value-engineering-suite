import { Resend } from 'resend';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, intent, module_interest, source_cta, referrer, url, timestamp } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const data = await resend.emails.send({
            from: 'Value Engineering Suite <onboarding@resend.dev>', // Update this with a verified domain if available, otherwise resend.dev for testing
            to: ['vchamasr@gmail.com'],
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

        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
