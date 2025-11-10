# 🚀 راهنمای تنظیم Google Sheets برای IdeaValidator

این راهنما مراحل کامل اتصال فرم سایت به Google Sheets را توضیح می‌دهد.

## 📋 آنچه نیاز دارید
- یک اکانت Google (Gmail)
- دسترسی به Google Sheets و Google Apps Script
- زمان: تقریباً ۲۰ دقیقه

---

## مرحله 1: ساخت Google Sheet ⏱️ (۵ دقیقه)

### 1.1 ساخت شیت جدید
1. به [Google Sheets](https://sheets.google.com) بروید
2. روی **"+ Blank spreadsheet"** کلیک کنید
3. اسم شیت را به **IdeaValidator_Signups** تغییر دهید

### 1.2 ساخت ستون‌ها
در **ردیف اول (Row 1)** این عناوین را بنویسید:

| A | B | C | D |
|---|---|---|---|
| Timestamp | Name | Email | Phone |

### 1.3 فرمت‌بندی (اختیاری)
ردیف اول را زیبا کنید:
- **Bold** کنید (Ctrl+B)
- رنگ پس‌زمینه: `#1F4E78` (آبی تیره)
- رنگ متن: سفید

### 1.4 ذخیره Sheet ID
از URL شیت، ID آن را کپی کنید:
```
https://docs.google.com/spreadsheets/d/[این_قسمت_SHEET_ID_است]/edit
```

---

## مرحله 2: ساخت Google Apps Script ⏱️ (۱۰ دقیقه)

### 2.1 باز کردن Apps Script Editor
1. در همان Google Sheet، به منوی **Extensions** بروید
2. روی **Apps Script** کلیک کنید
3. یک تب جدید باز می‌شود با یک فایل `Code.gs`

### 2.2 کپی کردن کد
1. کد پیش‌فرض را **پاک کنید**
2. کد زیر را کپی و در فایل Paste کنید:

\`\`\`javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();

    // دریافت اطلاعات از فرم
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';

    // اعتبارسنجی ایمیل
    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'Invalid email' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // بررسی ایمیل تکراری
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    for (let i = 1; i < values.length; i++) {
      if (values[i][2] === email) {
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'duplicate', message: 'Email already registered' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // اضافه کردن ردیف جدید
    sheet.appendRow([
      new Date(),  // Timestamp
      name,        // Name
      email,       // Email
      phone        // Phone
    ]);

    // ارسال ایمیل اطلاع‌رسانی (اختیاری)
    GmailApp.sendEmail(
      'YOUR_EMAIL@gmail.com',  // 👈 اینجا را تغییر دهید
      '🎉 ثبت‌نام جدید در IdeaValidator!',
      'نام: ' + name + '\\n' +
      'ایمیل: ' + email + '\\n' +
      'تلفن: ' + phone + '\\n\\n' +
      'تعداد کل ثبت‌نام‌ها: ' + (sheet.getLastRow() - 1)
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

// تابع تست (اختیاری - برای دیباگ)
function testPost() {
  const e = {
    parameter: {
      name: 'علی احمدی',
      email: 'test@example.com',
      phone: '09123456789'
    }
  };
  Logger.log(doPost(e).getContent());
}
\`\`\`

### 2.3 تغییر ایمیل
**مهم:** در خط 38، `YOUR_EMAIL@gmail.com` را با ایمیل Gmail واقعی خود عوض کنید.

### 2.4 ذخیره کردن
1. روی آیکون 💾 (Save) کلیک کنید یا **Ctrl+S**
2. نام پروژه را بگذارید: **IdeaValidator Script**

---

## مرحله 3: Deploy کردن Script ⏱️ (۵ دقیقه)

### 3.1 شروع Deploy
1. روی دکمه **Deploy** (گوشه بالا سمت راست) کلیک کنید
2. انتخاب کنید: **New deployment**

### 3.2 انتخاب نوع Deploy
1. روی آیکون ⚙️ (چرخ دنده) کنار "Select type" کلیک کنید
2. از منو، **Web app** را انتخاب کنید

### 3.3 تنظیمات Deploy
این تنظیمات را وارد کنید:
- **Description**: `IdeaValidator Form Handler` (یا هر توضیحی)
- **Execute as**: **Me (your email)**
- **Who has access**: ⚠️ **Anyone** (هر کسی)

### 3.4 اجازه دسترسی (Authorization)
1. روی **Deploy** کلیک کنید
2. پنجره‌ای باز می‌شود که می‌گوید: **Authorization required**
3. روی **Authorize access** کلیک کنید
4. اکانت Google خود را انتخاب کنید
5. پیغام Warning می‌بینید: **"Google hasn't verified this app"**
   - نگران نباشید! این طبیعی است
   - روی **Advanced** کلیک کنید
   - روی لینک **Go to [IdeaValidator Script] (unsafe)** کلیک کنید
6. صفحه Permissions باز می‌شود
7. روی **Allow** کلیک کنید

### 3.5 کپی کردن URL
1. بعد از Deploy، یک پنجره باز می‌شود
2. **Web app URL** را کپی کنید (مثل این):
   ```
   https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxx/exec
   ```
3. این URL را جایی **ذخیره کنید** (برای مرحله بعد نیاز دارید)
4. روی **Done** کلیک کنید

---

## مرحله 4: قرار دادن URL در کد ⏱️ (۲ دقیقه)

### 4.1 باز کردن فایل JavaScript
فایل `js/main.js` را در پروژه خود باز کنید.

### 4.2 جایگزینی URL
در **خط ۶**، این خط را پیدا کنید:
```javascript
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

آن را با URL واقعی که کپی کردید جایگزین کنید:
```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxx/exec';
```

### 4.3 ذخیره فایل
فایل را ذخیره کنید (Ctrl+S یا Cmd+S).

---

## مرحله 5: تست محلی ⏱️ (۵ دقیقه)

### 5.1 باز کردن فایل HTML
فایل `index.html` را در مرورگر باز کنید:
- روی فایل راست‌کلیک کنید
- انتخاب کنید: **Open with → Chrome** (یا مرورگر دیگر)

### 5.2 تست فرم
1. اسکرول کنید به بخش **"Join the Beta"**
2. فرم را پر کنید:
   - **نام**: یک نام تستی
   - **ایمیل**: ایمیل واقعی یا تستی
   - **تلفن**: یک شماره تستی (اختیاری)
3. روی **"Join the Beta"** کلیک کنید

### 5.3 بررسی نتیجه
**اگر موفقیت‌آمیز بود:**
- پیام سبز رنگ نشان داده می‌شود: "🎉 موفق! شما به لیست بتا اضافه شدید"
- بروید به Google Sheet خود
- یک ردیف جدید با اطلاعات باید ببینید
- ایمیل اطلاع‌رسانی دریافت کنید (اگر تنظیم کردید)

**اگر خطا داد:**
- بررسی کنید که URL را درست کپی کردید
- مطمئن شوید که "Who has access" روی "Anyone" است
- Console مرورگر را بررسی کنید (F12 → Console)

---

## مرحله 6: Commit و Push ⏱️ (۲ دقیقه)

اگر تست موفق بود، تغییرات را commit و push کنید:

```bash
# اضافه کردن فایل تغییر یافته
git add js/main.js

# Commit با پیام
git commit -m "Configure Google Apps Script URL"

# Push به GitHub
git push
```

---

## مرحله 7: فعال‌سازی GitHub Pages ⏱️ (۳ دقیقه)

### 7.1 تنظیمات Repository
1. بروید به repository خود در GitHub
2. کلیک کنید روی **Settings** (تنظیمات)
3. در منوی چپ، روی **Pages** کلیک کنید

### 7.2 تنظیم Source
در بخش **"Build and deployment"**:
- **Source**: انتخاب کنید **Deploy from a branch**
- **Branch**: انتخاب کنید `claude/google-sheets-landing-page-011CUyrcXmH6Ex8dM4SCZ5MF`
- **Folder**: انتخاب کنید `/ (root)`
- روی **Save** کلیک کنید

### 7.3 انتظار برای Deploy
- GitHub Pages نیاز به ۱-۲ دقیقه دارد
- صفحه را Refresh کنید
- URL سایت شما نمایش داده می‌شود:
  ```
  https://siawash1991.github.io/Idea-validation-test/
  ```

### 7.4 تست سایت زنده
1. به URL سایت بروید
2. فرم را دوباره تست کنید
3. مطمئن شوید که در Google Sheet ذخیره می‌شود

---

## ✅ چک‌لیست نهایی

قبل از لانچ، این موارد را بررسی کنید:

- [ ] Google Sheet ساخته شده با 4 ستون (Timestamp, Name, Email, Phone)
- [ ] Google Apps Script نوشته و ذخیره شده
- [ ] ایمیل شخصی در کد جایگزین شده
- [ ] Script به صورت Web App با دسترسی "Anyone" Deploy شده
- [ ] URL اسکریپت در `js/main.js` قرار داده شده
- [ ] تست محلی موفق بوده (فرم کار می‌کند)
- [ ] داده در Google Sheet ذخیره می‌شود
- [ ] ایمیل اطلاع‌رسانی دریافت شده
- [ ] تغییرات commit و push شده
- [ ] GitHub Pages فعال شده
- [ ] سایت زنده تست شده و کار می‌کند

---

## 🔧 عیب‌یابی (Troubleshooting)

### مشکل: "Google Apps Script URL not configured"
**حل:**
- مطمئن شوید که URL را درست کپی کرده‌اید
- بررسی کنید که فایل را ذخیره کرده‌اید
- Cache مرورگر را پاک کنید (Ctrl+Shift+R)

### مشکل: "Failed to fetch" یا "Network error"
**حل:**
- بررسی کنید که Script به درستی Deploy شده
- مطمئن شوید "Who has access" روی "Anyone" است
- URL را دوباره بررسی کنید (نباید `dev` در آن باشد، باید `/exec` باشد)

### مشکل: داده در Sheet ذخیره نمی‌شود
**حل:**
- Console مرورگر را باز کنید (F12)
- دنبال خطا بگردید
- Script را دوباره Deploy کنید (Manage deployments → Edit → Deploy)
- مطمئن شوید که Sheet ID درست است

### مشکل: ایمیل دریافت نمی‌شود
**حل:**
- بررسی کنید که ایمیل خود را درست وارد کرده‌اید
- پوشه Spam را چک کنید
- مطمئن شوید که به Gmail اجازه ارسال داده‌اید

### مشکل: "Authorization required"
**حل:**
- Script را دوباره Authorize کنید
- مطمئن شوید که با همان اکانت Google وارد شده‌اید

---

## 📞 پشتیبانی

اگر مشکلی پیش آمد:
1. فایل `README.md` را مطالعه کنید
2. Console مرورگر را بررسی کنید
3. Execution log اسکریپت را چک کنید (Apps Script → Executions)

---

## 🎉 تبریک!

حالا سایت شما:
- ✅ دوزبانه است (فارسی/انگلیسی)
- ✅ فرم کار می‌کند
- ✅ داده در Google Sheets ذخیره می‌شود
- ✅ ایمیل اطلاع‌رسانی دریافت می‌کنید
- ✅ روی GitHub Pages زنده است
- ✅ کاملاً رایگان است!

موفق باشید! 🚀
