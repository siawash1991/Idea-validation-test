// ============================================
// Google Apps Script URL Configuration
// ============================================
// IMPORTANT: Replace this with your actual Google Apps Script deployment URL
// Get this URL from: Extensions → Apps Script → Deploy → New Deployment
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJ1hUTuNWQEYgSy842Lbp4S-vEfwuC3zuZWm89VSS9zttKZjFIQYbK1mXpeIr--uwDzw/exec';

// ============================================
// Translations Object
// ============================================
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-problem': 'Problem',
        'nav-solution': 'Solution',
        'nav-features': 'Features',
        'nav-pricing': 'Pricing',
        'nav-signup': 'Sign Up',

        // Hero Section
        'hero-title': 'Validate Your Idea in 5 Minutes',
        'hero-subtitle': 'Before building, know if there\'s real market demand',
        'hero-cta': 'See How It Works',

        // Problem Section
        'problem-title': 'The Problem',
        'problem-stat': '42% of startups fail due to lack of market demand',
        'problem1-title': 'Wasted Time',
        'problem1-desc': 'Months spent building products nobody wants',
        'problem2-title': 'Wasted Money',
        'problem2-desc': 'Thousands invested in unvalidated ideas',
        'problem3-title': 'Emotional Toll',
        'problem3-desc': 'The stress of uncertainty and fear of failure',
        'problem4-title': 'No Clear Direction',
        'problem4-desc': 'Unsure if you\'re solving a real problem',

        // Solution Section
        'solution-title': 'Our Solution',
        'solution-subtitle': 'Validate your idea before you waste time and money',
        'solution-col1-title': 'How It Works',
        'solution-step1': 'Enter your business idea in plain English',
        'solution-step2': 'Our AI analyzes real market data',
        'solution-step3': 'Get a validation score (0-100)',
        'solution-step4': 'Receive actionable recommendations',
        'solution-step5': 'Make informed decisions in minutes',
        'solution-col2-title': 'What You Get',
        'solution-get1': 'Market demand analysis',
        'solution-get2': 'Competition assessment',
        'solution-get3': 'Target audience insights',
        'solution-get4': 'Revenue potential estimate',
        'solution-get5': 'Next steps roadmap',

        // Features Section
        'features-title': 'Key Features',
        'features-subtitle': 'Everything you need to validate your idea',
        'feature1-title': 'AI-Powered Analysis',
        'feature1-desc': 'Advanced algorithms analyze thousands of data points to give you accurate insights',
        'feature2-title': 'Real Market Data',
        'feature2-desc': 'Get insights based on actual market trends, not guesses or assumptions',
        'feature3-title': 'Actionable Insights',
        'feature3-desc': 'Receive clear recommendations on what to do next with your idea',

        // How It Works
        'how-title': 'How It Works',
        'how-subtitle': 'Four simple steps to validate your idea',
        'how-step1-title': 'Enter Your Idea',
        'how-step1-desc': 'Describe your business idea in simple terms',
        'how-step2-title': 'AI Analysis',
        'how-step2-desc': 'Our AI analyzes real market data and trends',
        'how-step3-title': 'Get Validation Score',
        'how-step3-desc': 'Receive a comprehensive validation score (0-100)',
        'how-step4-title': 'Get Recommendations',
        'how-step4-desc': 'Receive actionable next steps and insights',

        // Pricing Section
        'pricing-title': 'Compare Your Options',
        'pricing-subtitle': 'See how we stack up against traditional methods',
        'pricing1-name': 'IdeaValidator',
        'pricing1-time': '5 minutes',
        'pricing1-feat1': 'AI-powered analysis',
        'pricing1-feat2': 'Real market data',
        'pricing1-feat3': 'Validation score',
        'pricing1-feat4': 'Actionable insights',
        'pricing1-feat5': 'Instant results',
        'pricing1-btn': 'Get Started',
        'pricing2-name': 'Professional Research',
        'pricing2-time': '2-3 months',
        'pricing2-feat1': 'Human consultants',
        'pricing2-feat2': 'Custom research',
        'pricing2-feat3': 'Detailed reports',
        'pricing2-feat4': 'High cost',
        'pricing2-feat5': 'Long wait time',
        'pricing2-btn': 'Too Expensive',
        'pricing3-name': 'Manual Research',
        'pricing3-price': 'Free',
        'pricing3-time': '40-60 hours',
        'pricing3-feat1': 'DIY research',
        'pricing3-feat2': 'Google searches',
        'pricing3-feat3': 'Guesswork',
        'pricing3-feat4': 'Overwhelming',
        'pricing3-feat5': 'Time-consuming',
        'pricing3-btn': 'Too Slow',

        // Signup Section
        'signup-title': 'Join the Beta',
        'signup-subtitle': 'Be among the first to validate your ideas',
        'form-name-label': 'Full Name *',
        'form-name-placeholder': 'John Doe',
        'form-email-label': 'Email Address *',
        'form-email-placeholder': 'john@example.com',
        'form-phone-label': 'Phone Number (optional)',
        'form-phone-placeholder': '+1 (555) 000-0000',
        'form-submit-btn': 'Join the Beta',

        // Footer
        'footer-copyright': '© 2025 IdeaValidator. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-contact': 'Contact',

        // Form Messages
        'signup-count-plural': 'Join {count} other entrepreneurs',
        'signup-count-first': 'Be the first to join!',
        'form-submitting': 'Submitting...',
        'error-name-required': 'Please enter your name',
        'error-email-required': 'Please enter your email',
        'error-email-invalid': 'Please enter a valid email address',
        'error-script-not-configured': '⚠️ Google Apps Script URL not configured. Please update SCRIPT_URL in main.js',
        'success-message': '🎉 Success! You\'ve been added to the beta list. Check your email!',
        'error-network': 'Network error. Please check your connection and try again.',
        'error-duplicate': 'This email is already registered!'
    },
    fa: {
        // Navigation
        'nav-home': 'خانه',
        'nav-problem': 'مشکل',
        'nav-solution': 'راه‌حل',
        'nav-features': 'ویژگی‌ها',
        'nav-pricing': 'قیمت‌گذاری',
        'nav-signup': 'ثبت‌نام',

        // Hero Section
        'hero-title': 'ایده خود را در ۵ دقیقه اعتبارسنجی کنید',
        'hero-subtitle': 'قبل از ساخت، مطمئن شوید که تقاضای واقعی بازار وجود دارد',
        'hero-cta': 'نحوه کار را ببینید',

        // Problem Section
        'problem-title': 'مشکل',
        'problem-stat': '۴۲٪ استارتاپ‌ها به دلیل عدم تقاضای بازار شکست می‌خورند',
        'problem1-title': 'اتلاف زمان',
        'problem1-desc': 'ماه‌ها صرف ساخت محصولاتی که کسی نمی‌خواهد',
        'problem2-title': 'اتلاف پول',
        'problem2-desc': 'هزاران دلار سرمایه‌گذاری در ایده‌های اعتبارسنجی نشده',
        'problem3-title': 'فشار روحی',
        'problem3-desc': 'استرس ناشی از عدم اطمینان و ترس از شکست',
        'problem4-title': 'عدم مسیر روشن',
        'problem4-desc': 'عدم اطمینان از حل کردن یک مشکل واقعی',

        // Solution Section
        'solution-title': 'راه‌حل ما',
        'solution-subtitle': 'ایده خود را قبل از اتلاف زمان و پول اعتبارسنجی کنید',
        'solution-col1-title': 'نحوه کار',
        'solution-step1': 'ایده کسب‌وکار خود را به زبان ساده وارد کنید',
        'solution-step2': 'هوش مصنوعی ما داده‌های واقعی بازار را تحلیل می‌کند',
        'solution-step3': 'امتیاز اعتبارسنجی (۰-۱۰۰) دریافت کنید',
        'solution-step4': 'توصیه‌های قابل اجرا دریافت کنید',
        'solution-step5': 'در عرض چند دقیقه تصمیم آگاهانه بگیرید',
        'solution-col2-title': 'آنچه دریافت می‌کنید',
        'solution-get1': 'تحلیل تقاضای بازار',
        'solution-get2': 'ارزیابی رقابت',
        'solution-get3': 'بینش مخاطب هدف',
        'solution-get4': 'تخمین پتانسیل درآمد',
        'solution-get5': 'نقشه راه گام‌های بعدی',

        // Features Section
        'features-title': 'ویژگی‌های کلیدی',
        'features-subtitle': 'همه چیز برای اعتبارسنجی ایده شما',
        'feature1-title': 'تحلیل مبتنی بر هوش مصنوعی',
        'feature1-desc': 'الگوریتم‌های پیشرفته هزاران نقطه داده را تحلیل می‌کنند تا بینش دقیق به شما بدهند',
        'feature2-title': 'داده‌های واقعی بازار',
        'feature2-desc': 'بینش‌هایی مبتنی بر روندهای واقعی بازار، نه حدس و گمان',
        'feature3-title': 'بینش‌های قابل اجرا',
        'feature3-desc': 'توصیه‌های روشن در مورد اقدام بعدی با ایده خود دریافت کنید',

        // How It Works
        'how-title': 'نحوه کار',
        'how-subtitle': 'چهار مرحله ساده برای اعتبارسنجی ایده شما',
        'how-step1-title': 'ایده خود را وارد کنید',
        'how-step1-desc': 'ایده کسب‌وکار خود را به زبان ساده توصیف کنید',
        'how-step2-title': 'تحلیل هوش مصنوعی',
        'how-step2-desc': 'هوش مصنوعی ما داده‌های واقعی بازار و روندها را تحلیل می‌کند',
        'how-step3-title': 'امتیاز اعتبارسنجی دریافت کنید',
        'how-step3-desc': 'امتیاز جامع اعتبارسنجی (۰-۱۰۰) دریافت کنید',
        'how-step4-title': 'توصیه‌ها دریافت کنید',
        'how-step4-desc': 'گام‌های بعدی و بینش‌های قابل اجرا دریافت کنید',

        // Pricing Section
        'pricing-title': 'مقایسه گزینه‌های شما',
        'pricing-subtitle': 'ببینید ما در مقابل روش‌های سنتی چطور هستیم',
        'pricing1-name': 'ایده‌ولیدیتور',
        'pricing1-time': '۵ دقیقه',
        'pricing1-feat1': 'تحلیل مبتنی بر هوش مصنوعی',
        'pricing1-feat2': 'داده‌های واقعی بازار',
        'pricing1-feat3': 'امتیاز اعتبارسنجی',
        'pricing1-feat4': 'بینش‌های قابل اجرا',
        'pricing1-feat5': 'نتایج فوری',
        'pricing1-btn': 'شروع کنید',
        'pricing2-name': 'تحقیقات حرفه‌ای',
        'pricing2-time': '۲-۳ ماه',
        'pricing2-feat1': 'مشاوران انسانی',
        'pricing2-feat2': 'تحقیقات سفارشی',
        'pricing2-feat3': 'گزارش‌های تفصیلی',
        'pricing2-feat4': 'هزینه بالا',
        'pricing2-feat5': 'زمان انتظار طولانی',
        'pricing2-btn': 'خیلی گران',
        'pricing3-name': 'تحقیق دستی',
        'pricing3-price': 'رایگان',
        'pricing3-time': '۴۰-۶۰ ساعت',
        'pricing3-feat1': 'تحقیق شخصی',
        'pricing3-feat2': 'جستجوهای گوگل',
        'pricing3-feat3': 'حدس و گمان',
        'pricing3-feat4': 'طاقت‌فرسا',
        'pricing3-feat5': 'وقت‌گیر',
        'pricing3-btn': 'خیلی کند',

        // Signup Section
        'signup-title': 'به بتا بپیوندید',
        'signup-subtitle': 'جزو اولین‌ها باشید که ایده‌هایتان را اعتبارسنجی می‌کنند',
        'form-name-label': 'نام کامل *',
        'form-name-placeholder': 'علی احمدی',
        'form-email-label': 'آدرس ایمیل *',
        'form-email-placeholder': 'ali@example.com',
        'form-phone-label': 'شماره تلفن (اختیاری)',
        'form-phone-placeholder': '۰۹۱۲۳۴۵۶۷۸۹',
        'form-submit-btn': 'عضویت در بتا',

        // Footer
        'footer-copyright': '© ۲۰۲۵ ایده‌ولیدیتور. تمامی حقوق محفوظ است.',
        'footer-privacy': 'سیاست حریم خصوصی',
        'footer-terms': 'شرایط استفاده',
        'footer-contact': 'تماس',

        // Form Messages
        'signup-count-plural': 'به {count} کارآفرین دیگر بپیوندید',
        'signup-count-first': 'اولین نفر باشید!',
        'form-submitting': 'در حال ارسال...',
        'error-name-required': 'لطفاً نام خود را وارد کنید',
        'error-email-required': 'لطفاً ایمیل خود را وارد کنید',
        'error-email-invalid': 'لطفاً یک آدرس ایمیل معتبر وارد کنید',
        'error-script-not-configured': '⚠️ URL اسکریپت گوگل تنظیم نشده است. لطفاً SCRIPT_URL را در main.js به‌روزرسانی کنید',
        'success-message': '🎉 موفق! شما به لیست بتا اضافه شدید. ایمیل خود را بررسی کنید!',
        'error-network': 'خطای شبکه. لطفاً اتصال خود را بررسی کنید و دوباره امتحان کنید.',
        'error-duplicate': 'این ایمیل قبلاً ثبت شده است!'
    }
};

// ============================================
// Current Language
// ============================================
let currentLang = localStorage.getItem('language') || 'en';

// ============================================
// DOM Elements
// ============================================
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const spinner = document.getElementById('spinner');
const formMessage = document.getElementById('formMessage');
const signupCount = document.getElementById('signupCount');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// ============================================
// Translation Functions
// ============================================
function t(key) {
    return translations[currentLang][key] || key;
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = t(key);
    });

    // Update signup counter
    updateSignupCount();

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-switch') === lang) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// Email Validation Function
// ============================================
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// Show Message Function
// ============================================
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ============================================
// Update Signup Counter
// ============================================
function updateSignupCount() {
    let count = localStorage.getItem('signupCount') || 0;
    if (count > 0) {
        signupCount.textContent = t('signup-count-plural').replace('{count}', count);
    } else {
        signupCount.textContent = t('signup-count-first');
    }
}

// ============================================
// Loading State Management
// ============================================
function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = t('form-submitting');
        spinner.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        btnText.textContent = t('form-submit-btn');
        spinner.style.display = 'none';
    }
}

// ============================================
// Form Submission Handler
// ============================================
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validate inputs
    if (!name) {
        showMessage(t('error-name-required'), 'error');
        return;
    }

    if (!email) {
        showMessage(t('error-email-required'), 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(t('error-email-invalid'), 'error');
        return;
    }

    // Check if SCRIPT_URL is configured
    if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        showMessage(t('error-script-not-configured'), 'error');
        console.error('Please replace SCRIPT_URL with your actual Google Apps Script deployment URL');
        return;
    }

    // Show loading state
    setLoadingState(true);
    formMessage.style.display = 'none';

    try {
        // Create FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);

        // Send request to Google Apps Script
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Required for Google Apps Script
        });

        // Note: With 'no-cors' mode, we can't read the response
        // So we assume success if no error is thrown

        // Success handling
        showMessage(t('success-message'), 'success');

        // Update signup counter
        let count = parseInt(localStorage.getItem('signupCount') || 0);
        count++;
        localStorage.setItem('signupCount', count);
        updateSignupCount();

        // Clear form fields
        form.reset();

        // If you want to handle actual response (requires CORS setup in Apps Script):
        // Uncomment below and remove 'no-cors' mode
        /*
        const data = await response.json();

        if (data.status === 'success') {
            showMessage('🎉 Success! You\'ve been added to the beta list. Check your email!', 'success');

            // Update counter with actual count from server
            if (data.totalSignups) {
                localStorage.setItem('signupCount', data.totalSignups);
                updateSignupCount();
            }

            form.reset();
        } else if (data.status === 'duplicate') {
            showMessage('This email is already registered!', 'error');
        } else {
            showMessage('An error occurred. Please try again.', 'error');
        }
        */

    } catch (error) {
        console.error('Error:', error);
        showMessage(t('error-network'), 'error');
    } finally {
        setLoadingState(false);
    }
});

// ============================================
// Mobile Menu Toggle
// ============================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    switchLanguage(currentLang);

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-switch');
            switchLanguage(lang);
        });
    });

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// Console Warning
// ============================================
if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    console.warn('%c⚠️ SETUP REQUIRED', 'color: orange; font-size: 20px; font-weight: bold;');
    console.warn('Please update the SCRIPT_URL variable in main.js with your Google Apps Script deployment URL');
    console.warn('Instructions: https://github.com/YOUR_USERNAME/ideavalidator-landing#setup');
}
