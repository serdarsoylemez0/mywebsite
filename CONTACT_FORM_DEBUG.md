# Contact Form Debugging Guide

## Current Status
✅ EmailJS SDK installed
✅ `.env.local` file created with credentials
✅ Dev server restarted
✅ Test emails from EmailJS dashboard work

## Issue
Form submits but emails aren't being received from the actual website form.

## Debugging Steps

### 1. Check Browser Console
1. Open your website: http://localhost:3002
2. Go to Contact page
3. Open browser DevTools (F12)
4. Go to Console tab
5. Fill out and submit the form
6. Look for these logs:
   - `EmailJS Config:` - Should show your actual IDs (not YOUR_SERVICE_ID)
   - `Form Data:` - Should show the form values
   - `Email sent successfully!` - If it worked
   - Any error messages in red

### 2. Verify EmailJS Template Variables

Your EmailJS template must use these exact variable names:
- `{{name}}` - for the name field
- `{{email}}` - for the email field
- `{{subject}}` - for the subject field
- `{{message}}` - for the message field

**Check your template:**
1. Go to https://dashboard.emailjs.com/admin/templates
2. Click on your template (`template_39udxld`)
3. Make sure it uses `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

**Example template:**
```
Subject: New Contact Form - {{subject}}

From: {{name}}
Email: {{email}}

Message:
{{message}}
```

### 3. Common Issues & Solutions

#### Issue: Console shows "YOUR_SERVICE_ID"
**Solution:** Environment variables not loaded
- Make sure `.env.local` exists in root directory
- Restart dev server: Stop and run `npm run dev` again
- Hard refresh browser (Ctrl+Shift+R)

#### Issue: Error "Template not found"
**Solution:** Template ID mismatch
- Verify template ID in EmailJS dashboard
- Update `.env.local` with correct template ID
- Restart dev server

#### Issue: Error "Service not found"
**Solution:** Service ID mismatch
- Verify service ID in EmailJS dashboard
- Update `.env.local` with correct service ID
- Restart dev server

#### Issue: No error but no email received
**Solution:** Check spam folder or template configuration
- Check spam/junk folder
- Verify email service is connected in EmailJS dashboard
- Test the template directly in EmailJS dashboard
- Check EmailJS usage limits (200 emails/month on free tier)

### 4. Test with Console Logs

After submitting the form, you should see in console:

```javascript
EmailJS Config: {
  serviceId: "service_8zak02o",
  templateId: "template_39udxld", 
  publicKey: "fTbDTaU3lq2zGrXsk"
}

Form Data: {
  name: "Test User",
  email: "test@example.com",
  subject: "Job Opportunity",
  message: "Test message"
}

Email sent successfully!
```

If you see `YOUR_SERVICE_ID` instead of `service_8zak02o`, the environment variables aren't loading.

### 5. Verify Environment Variables Are Loading

Run this in your browser console on the contact page:
```javascript
console.log({
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
})
```

Should show your actual IDs, not `undefined`.

### 6. EmailJS Dashboard Checks

1. **Email Service Status**
   - Go to Email Services
   - Make sure your service (Gmail/Outlook) shows "Connected"
   - If not, reconnect it

2. **Template Test**
   - Go to Email Templates
   - Open your template
   - Click "Test it"
   - Fill in test values
   - Send test email
   - If this works but website doesn't, it's a configuration issue

3. **Check Usage**
   - Go to Dashboard
   - Check if you've hit the 200 email/month limit

## Quick Fix Checklist

- [ ] `.env.local` file exists in root directory
- [ ] `.env.local` has correct service ID, template ID, and public key
- [ ] Dev server was restarted after creating `.env.local`
- [ ] Browser was hard refreshed (Ctrl+Shift+R)
- [ ] EmailJS template uses `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
- [ ] Email service is connected in EmailJS dashboard
- [ ] Not over the 200 emails/month limit

## Still Not Working?

Share the console output after submitting the form, and I can help debug further!
