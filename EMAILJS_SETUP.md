# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root directory:

```bash
# Copy from .env.example
cp .env.example .env.local
```

2. Edit `.env.local` with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Test the Form

1. Restart your development server:
```bash
npm run dev
```

2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the test message

## Template Variables

The form sends these variables to EmailJS:
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{subject}}` - Selected subject
- `{{message}}` - User's message

## Troubleshooting

### Form not sending?
- Check browser console for errors
- Verify all environment variables are set correctly
- Make sure you restarted the dev server after adding `.env.local`

### Not receiving emails?
- Check your spam folder
- Verify the email service is connected in EmailJS dashboard
- Test the template in EmailJS dashboard

### Rate limiting?
- Free tier: 200 emails/month
- Upgrade to paid plan for more

## Features Implemented

✅ Form validation (required fields)
✅ Loading states during submission
✅ Success/error feedback messages
✅ Form reset after successful submission
✅ Disabled inputs during submission
✅ Minimum message length (10 characters)
✅ Email format validation

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Public key is safe to expose (it's client-side)
- EmailJS handles rate limiting automatically
- Consider adding reCAPTCHA for production use
