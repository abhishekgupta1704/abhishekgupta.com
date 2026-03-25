interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

const html = (title: string, message: string, status = 200) =>
  new Response(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        font-family: Inter, sans-serif;
        background: #0a0a0a;
        color: #f5f5f5;
      }
      main {
        width: min(100%, 620px);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 24px;
        background: rgba(255,255,255,0.04);
        padding: 28px;
      }
      a {
        color: #f59e0b;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${message}</p>
      <p><a href="/contact.html">Back to contact form</a></p>
      <p><a href="/">Back to portfolio</a></p>
    </main>
  </body>
</html>`,
    {
      status,
      headers: {
        'content-type': 'text/html; charset=UTF-8',
      },
    },
  );

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/x-www-form-urlencoded') && !contentType.includes('multipart/form-data')) {
    return html('Invalid request', 'The contact form submission format was not accepted.', 400);
  }

  const formData = await request.formData();
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const subject = String(formData.get('subject') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const company = String(formData.get('company') || '').trim();

  if (company) {
    return html('Message blocked', 'Spam protection prevented this submission.', 400);
  }

  if (!name || !email || !message) {
    return html('Missing fields', 'Please provide your name, email address, subject, and message.', 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return html('Invalid email', 'Please provide a valid email address.', 400);
  }

  if (name.length > 120 || email.length > 180 || subject.length > 120 || message.length > 5000) {
    return html('Input too long', 'One or more fields exceeded the allowed length.', 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL) {
    return html(
      'Form not configured',
      'The contact form is not configured yet. Set RESEND_API_KEY and CONTACT_FROM_EMAIL in Cloudflare Pages before using it.',
      500,
    );
  }

  const sendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'abhishekgupta-portfolio/1.0',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL || 'abhishekgupta1704@gmail.com'],
      reply_to: email,
      subject: subject || `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
    }),
  });

  if (!sendResponse.ok) {
    return html('Send failed', 'The message could not be sent right now. Please try again later.', 502);
  }

  return html('Message sent', 'Your message was sent successfully. Abhishek will get it at abhishekgupta1704@gmail.com.');
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
