# IdeaValidator Landing Page

A professional static landing page for IdeaValidator, hosted on GitHub Pages with Google Sheets backend integration for collecting user signups.

## 🎯 Features

- **Static Landing Page**: Fast, responsive, SEO-friendly
- **Form Submission**: Collects Name, Email, Phone
- **Google Sheets Backend**: Free, unlimited storage
- **No Server Required**: Fully serverless using Google Apps Script
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Email Notifications**: Get notified on each signup
- **No CORS Issues**: Using Google Apps Script endpoint

## 📁 Project Structure

```
ideavalidator-landing/
├── index.html           # Main landing page
├── css/
│   └── styles.css       # All styling and responsive design
├── js/
│   └── main.js          # Form handling and validation
├── images/
│   └── .gitkeep         # Placeholder for images
├── README.md            # This file
└── .gitignore           # Git ignore file
```

## 🚀 Quick Start

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "IdeaValidator_Signups"
3. Add these column headers in Row 1:
   - **Column A**: Timestamp
   - **Column B**: Name
   - **Column C**: Email
   - **Column D**: Phone
4. Format the header row (optional):
   - Bold text
   - Background: #1F4E78
   - Text color: White
5. Save the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```

### Step 2: Create Google Apps Script

1. In your Google Sheet, click: **Extensions → Apps Script**
2. Delete the default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();

    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';

    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'Invalid email' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Check for duplicate email
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    for (let i = 1; i < values.length; i++) {
      if (values[i][2] === email) {
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'duplicate', message: 'Email already registered' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Add new row
    sheet.appendRow([
      new Date(),
      name,
      email,
      phone
    ]);

    // Send email notification (optional)
    GmailApp.sendEmail(
      'YOUR_EMAIL@gmail.com', // Change this!
      '🎉 New IdeaValidator Signup!',
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nTotal Signups: ${sheet.getLastRow() - 1}`
    );

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Signup successful!',
        totalSignups: sheet.getLastRow() - 1
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error);
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Replace** `YOUR_EMAIL@gmail.com` with your actual Gmail address
5. Click **Save** (💾 icon)

### Step 3: Deploy Google Apps Script

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the deployment URL** (looks like):
   ```
   https://script.google.com/macros/s/AKfycbxxx.../exec
   ```
6. Click **Done**

### Step 4: Configure the Landing Page

1. Open `js/main.js`
2. Find this line:
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your actual Google Apps Script URL:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxx.../exec';
   ```
4. Save the file

### Step 5: Test Locally

1. Open `index.html` in your browser
2. Fill out the form and submit
3. Check your Google Sheet - you should see a new row
4. Check your Gmail - you should receive a notification email

### Step 6: Deploy to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: IdeaValidator landing page"
   git push
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings**
   - Scroll to **GitHub Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** or **claude/google-sheets-landing-page-011CUyrcXmH6Ex8dM4SCZ5MF**
   - Folder: **/ (root)**
   - Click **Save**

3. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/Idea-validation-test/
   ```

## 📋 What's Included

### Sections

1. **Navigation**: Sticky navigation with responsive hamburger menu
2. **Hero Section**: Eye-catching headline with CTA
3. **Problem Section**: Highlights the pain points (42% startup failure stat)
4. **Solution Section**: Two-column layout explaining the solution
5. **Features Section**: Three feature cards with icons
6. **How It Works**: 4-step process visualization
7. **Pricing Comparison**: Compare with traditional methods
8. **Signup Form**: Name, Email, Phone collection
9. **Footer**: Links and copyright info

### Form Features

- ✅ Client-side validation
- ✅ Email format validation
- ✅ Loading spinner during submission
- ✅ Success/error messages
- ✅ Duplicate email detection
- ✅ Signup counter (localStorage)
- ✅ Form reset on success
- ✅ Email notifications

### Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)
- ✅ Hamburger menu for mobile
- ✅ Touch-friendly buttons

## 🛠️ Customization

### Change Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
    --primary-color: #1F4E78;      /* Main brand color */
    --secondary-color: #2E5FA3;    /* Secondary brand color */
    --accent-color: #27AE60;       /* CTA buttons */
    --light-bg: #F4F6F6;           /* Section backgrounds */
    --text-color: #2C3E50;         /* Body text */
    --light-text: #7F8C8D;         /* Secondary text */
}
```

### Change Content

Edit `index.html` and update:
- Headlines and taglines
- Problem points
- Solution details
- Feature descriptions
- Pricing information

### Add More Form Fields

1. Add HTML in `index.html`:
   ```html
   <div class="form-group">
       <label for="company">Company Name</label>
       <input type="text" id="company" name="company">
   </div>
   ```

2. Update Google Sheet to add a new column

3. Update Apps Script to capture the new field:
   ```javascript
   const company = e.parameter.company || '';
   sheet.appendRow([new Date(), name, email, phone, company]);
   ```

## 🔧 Troubleshooting

### Form not submitting?

1. Check browser console for errors (F12)
2. Verify `SCRIPT_URL` is correctly set in `main.js`
3. Ensure Google Apps Script is deployed with "Anyone" access
4. Check that your Google Sheet is accessible

### Not receiving emails?

1. Verify your email is correctly set in Apps Script
2. Check your Gmail spam folder
3. Ensure Gmail permissions are granted to the script

### Data not appearing in Google Sheet?

1. Check that the Google Sheet is the one linked to the Apps Script
2. Verify Apps Script is deployed (not just saved)
3. Check Apps Script execution logs for errors

### CORS errors?

- The code uses `mode: 'no-cors'` which should prevent CORS errors
- If you want to read responses, you'll need to set up CORS in Apps Script

## 📊 Analytics (Optional)

### Add Google Analytics

1. Get your GA4 tracking ID from [Google Analytics](https://analytics.google.com)
2. Add this to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎁 Future Enhancements

- [ ] Add testimonials section
- [ ] Add FAQ section
- [ ] Add video demo
- [ ] Implement dark mode
- [ ] Add more form fields (country, job title)
- [ ] Integrate with Mailchimp
- [ ] Add Slack/Discord notifications
- [ ] Create sitemap.xml for SEO
- [ ] Add Open Graph tags for social sharing

## 📝 Important URLs to Save

Keep these URLs handy:

1. **Google Sheet**: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
2. **Apps Script**: Access via Extensions → Apps Script in your Sheet
3. **Deployment URL**: The URL you copied during deployment
4. **Live Site**: `https://YOUR_USERNAME.github.io/Idea-validation-test/`

## 🤝 Contributing

Feel free to fork this project and customize it for your own needs!

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Credits

Built for IdeaValidator - Validate Your Business Ideas in Minutes

---

**Need Help?**
- Check the [TODO list](./TODO.md) for detailed implementation steps
- Review Google Apps Script documentation
- Check GitHub Pages documentation

**Ready to launch?** Follow the steps above and you'll be live in under an hour! 🚀
