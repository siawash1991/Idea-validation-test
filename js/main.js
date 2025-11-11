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
        'hero-title': 'Get Your Validation Score in 5 Minutes (Not 5 Months)',
        'hero-subtitle': '42% of startups fail due to no market demand. We validate yours against 12,000+ real problems from Reddit, Product Hunt, Hacker News & more.',
        'hero-cta': 'See Your Validation Score',
        'hero-trust': 'Trusted by 100+ founders',

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
        'solution-title': 'Multi-AI Powered Market Research',
        'solution-subtitle': 'We combine multiple AI systems to give you complete market intelligence',
        'solution-col1-title': 'Our AI Technology Stack',
        'solution-step1': 'Reddit Analysis: Real user opinions & pain points',
        'solution-step2': 'Perplexity Deep Search: Latest market trends & data',
        'solution-step3': 'Claude Deep Thinking: Complex market analysis',
        'solution-step4': 'Multi-AI Synthesis: Combined insights from all AIs',
        'solution-step5': 'Profitability Score: Is your idea actually profitable?',
        'solution-col2-title': 'What You Get',
        'solution-get1': 'Real Reddit user demand & pain points',
        'solution-get2': 'Deep market research via Perplexity',
        'solution-get3': 'Competition & pricing analysis',
        'solution-get4': 'Revenue potential & profit forecast',
        'solution-get5': 'Go/No-Go recommendation with reasons',

        // Data Sources Section
        'data-title': 'Analyzing 12,000+ Real Problems Daily',
        'data-subtitle': 'We search these platforms to find what people actually need',
        'data-update': 'Updated daily',

        // What You Get Section
        'whatyouget-title': 'What You Get in Your Report',
        'whatyouget-subtitle': 'Everything you need to make a confident GO/NO-GO decision',
        'whatyouget-item1-title': 'Validation Score (0-10)',
        'whatyouget-item1-desc': 'Clear score showing market demand strength with confidence level',
        'whatyouget-item2-title': 'Top 5 Pain Points',
        'whatyouget-item2-desc': 'Real quotes & evidence from actual users expressing their problems',
        'whatyouget-item3-title': 'Market Size Estimate',
        'whatyouget-item3-desc': 'TAM/SAM/SOM calculations to understand your revenue potential',
        'whatyouget-item4-title': 'Willingness-to-Pay',
        'whatyouget-item4-desc': 'What customers will actually pay based on competitor analysis',
        'whatyouget-item5-title': 'Competition Analysis',
        'whatyouget-item5-desc': 'Who else is solving this and how you can differentiate',
        'whatyouget-item6-title': 'GO/NO-GO Decision',
        'whatyouget-item6-desc': 'Clear recommendation with reasoning: Build it, pivot, or drop it',

        // Social Proof Section
        'social-title': 'Join 100+ Successful Founders',
        'social-subtitle': 'Entrepreneurs who validated before building',
        'social-testimonial1': 'Saved me 6 months of wasted development time',
        'social-testimonial1-author': 'Ahmed K.',
        'social-testimonial2': 'Found the real market problem I should solve',
        'social-testimonial2-author': 'Sarah M.',
        'social-testimonial3': 'Perfect validation before pitching to investors',
        'social-testimonial3-author': 'Mohammad R.',
        'social-stat1': '100+',
        'social-stat1-label': 'Founders',
        'social-stat2': '12K+',
        'social-stat2-label': 'Problems Analyzed',
        'social-stat3': '5 min',
        'social-stat3-label': 'Avg. Time',

        // Features Section
        'features-title': 'Powered by Multiple AI Systems',
        'features-subtitle': 'We don\'t rely on one AI - we combine the best of all',
        'feature1-title': 'Reddit + Perplexity Fusion',
        'feature1-desc': 'Real user opinions from Reddit combined with deep web research from Perplexity to uncover actual market demand',
        'feature2-title': 'Claude Deep Thinking',
        'feature2-desc': 'Advanced reasoning capabilities analyze complex market dynamics, competition, and profitability scenarios',
        'feature3-title': 'Multi-AI Synthesis',
        'feature3-desc': 'All AI outputs combined into one comprehensive report telling you: Is your idea executable and profitable?',

        // How It Works
        'how-title': 'How Our Multi-AI System Works',
        'how-subtitle': 'Four AI-powered steps to complete market validation',
        'how-step1-title': '1. You Submit Your Idea',
        'how-step1-desc': 'Simply describe your business idea - our system handles the rest',
        'how-step2-title': '2. Multi-AI Deep Research',
        'how-step2-desc': 'Reddit scraping + Perplexity search + Claude analysis running in parallel',
        'how-step3-title': '3. AI Synthesis & Scoring',
        'how-step3-desc': 'All AI insights combined into profitability score & feasibility analysis',
        'how-step4-title': '4. Get Your Complete Report',
        'how-step4-desc': 'Detailed report: Market demand, competition, revenue potential, and Go/No-Go decision',

        // Pricing Section
        'pricing-title': 'Simple, Transparent Pricing',
        'pricing-subtitle': 'Start free, upgrade when you need more validations',
        'pricing1-name': 'FREE',
        'pricing1-price': '$0',
        'pricing1-time': '1 validation/month',
        'pricing1-feat1': 'Basic validation score',
        'pricing1-feat2': 'Top 3 pain points',
        'pricing1-feat3': 'Market size estimate',
        'pricing1-feat4': 'Email support',
        'pricing1-feat5': '—',
        'pricing1-btn': 'Start Free',
        'pricing2-name': 'STARTER',
        'pricing2-price': '$39',
        'pricing2-time': '5 validations/month',
        'pricing2-feat1': 'Full validation score (0-10)',
        'pricing2-feat2': 'Top 5 pain points with quotes',
        'pricing2-feat3': 'TAM/SAM/SOM calculations',
        'pricing2-feat4': 'Competition analysis',
        'pricing2-feat5': 'GO/NO-GO recommendation',
        'pricing2-btn': 'Get Started',
        'pricing2-popular': 'Most Popular',
        'pricing3-name': 'PRO',
        'pricing3-price': '$99',
        'pricing3-time': 'Unlimited validations',
        'pricing3-feat1': 'Everything in Starter',
        'pricing3-feat2': 'Willingness-to-pay analysis',
        'pricing3-feat3': 'Customer profile deep dive',
        'pricing3-feat4': 'Priority email support',
        'pricing3-feat5': 'API access (coming soon)',
        'pricing3-btn': 'Go Pro',

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
        'hero-title': 'امتیاز اعتبارسنجی را در ۵ دقیقه دریافت کنید (نه ۵ ماه)',
        'hero-subtitle': '۴۲٪ استارتاپ‌ها به دلیل نبود تقاضای بازار شکست می‌خورند. ما ایده شما را در مقابل ۱۲,۰۰۰+ مشکل واقعی از Reddit، Product Hunt، Hacker News و بیشتر اعتبارسنجی می‌کنیم.',
        'hero-cta': 'امتیاز اعتبارسنجی خود را ببینید',
        'hero-trust': 'مورد اعتماد ۱۰۰+ بنیان‌گذار',

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
        'solution-title': 'تحقیق بازار با چند هوش مصنوعی',
        'solution-subtitle': 'ما چندین سیستم هوش مصنوعی را ترکیب می‌کنیم تا اطلاعات کامل بازار به شما بدهیم',
        'solution-col1-title': 'پشته فناوری هوش مصنوعی ما',
        'solution-step1': 'تحلیل Reddit: نظرات واقعی کاربران و مشکلات',
        'solution-step2': 'جستجوی عمیق Perplexity: آخرین روندها و داده‌ها',
        'solution-step3': 'تفکر عمیق Claude: تحلیل پیچیده بازار',
        'solution-step4': 'ترکیب چند AI: بینش‌های ترکیبی از همه هوش مصنوعی‌ها',
        'solution-step5': 'امتیاز سودآوری: آیا ایده شما واقعاً سودآور است؟',
        'solution-col2-title': 'آنچه دریافت می‌کنید',
        'solution-get1': 'تقاضای واقعی کاربران Reddit و مشکلات',
        'solution-get2': 'تحقیق عمیق بازار از طریق Perplexity',
        'solution-get3': 'تحلیل رقابت و قیمت‌گذاری',
        'solution-get4': 'پتانسیل درآمد و پیش‌بینی سود',
        'solution-get5': 'توصیه برو/نرو با دلایل',

        // Data Sources Section
        'data-title': 'تحلیل روزانه ۱۲,۰۰۰+ مشکل واقعی',
        'data-subtitle': 'ما این پلتفرم‌ها را جستجو می‌کنیم تا بفهمیم مردم واقعاً به چه چیزی نیاز دارند',
        'data-update': 'به‌روزرسانی روزانه',

        // What You Get Section
        'whatyouget-title': 'آنچه در گزارش خود دریافت می‌کنید',
        'whatyouget-subtitle': 'همه چیز برای تصمیم‌گیری با اطمینان: برو/نرو',
        'whatyouget-item1-title': 'امتیاز اعتبارسنجی (۰-۱۰)',
        'whatyouget-item1-desc': 'امتیاز واضح که قدرت تقاضای بازار را با سطح اطمینان نشان می‌دهد',
        'whatyouget-item2-title': '۵ مشکل برتر',
        'whatyouget-item2-desc': 'نقل‌قول‌ها و مدارک واقعی از کاربران واقعی که مشکلات خود را بیان می‌کنند',
        'whatyouget-item3-title': 'تخمین اندازه بازار',
        'whatyouget-item3-desc': 'محاسبات TAM/SAM/SOM برای درک پتانسیل درآمد شما',
        'whatyouget-item4-title': 'تمایل به پرداخت',
        'whatyouget-item4-desc': 'مشتریان واقعاً چقدر پرداخت می‌کنند بر اساس تحلیل رقبا',
        'whatyouget-item5-title': 'تحلیل رقابت',
        'whatyouget-item5-desc': 'چه کسی دیگری این مشکل را حل می‌کند و چطور می‌توانید متمایز شوید',
        'whatyouget-item6-title': 'تصمیم برو/نرو',
        'whatyouget-item6-desc': 'توصیه واضح با دلیل: بسازید، تغییر مسیر دهید یا رها کنید',

        // Social Proof Section
        'social-title': 'به ۱۰۰+ بنیان‌گذار موفق بپیوندید',
        'social-subtitle': 'کارآفرینانی که قبل از ساخت اعتبارسنجی کردند',
        'social-testimonial1': '۶ ماه توسعه هدر رفته را برایم ذخیره کرد',
        'social-testimonial1-author': 'احمد ک.',
        'social-testimonial2': 'مشکل واقعی بازار را که باید حل کنم پیدا کردم',
        'social-testimonial2-author': 'سارا م.',
        'social-testimonial3': 'اعتبارسنجی عالی قبل از ارائه به سرمایه‌گذاران',
        'social-testimonial3-author': 'محمد ر.',
        'social-stat1': '۱۰۰+',
        'social-stat1-label': 'بنیان‌گذار',
        'social-stat2': '۱۲ هزار+',
        'social-stat2-label': 'مشکل تحلیل شده',
        'social-stat3': '۵ دقیقه',
        'social-stat3-label': 'میانگین زمان',

        // Features Section
        'features-title': 'قدرت گرفته از چندین سیستم هوش مصنوعی',
        'features-subtitle': 'ما به یک AI متکی نیستیم - بهترین همه را ترکیب می‌کنیم',
        'feature1-title': 'ترکیب Reddit + Perplexity',
        'feature1-desc': 'نظرات واقعی کاربران از Reddit ترکیب با تحقیق عمیق وب از Perplexity برای کشف تقاضای واقعی بازار',
        'feature2-title': 'تفکر عمیق Claude',
        'feature2-desc': 'قابلیت‌های استدلال پیشرفته برای تحلیل دینامیک‌های پیچیده بازار، رقابت و سناریوهای سودآوری',
        'feature3-title': 'ترکیب چند AI',
        'feature3-desc': 'تمام خروجی‌های AI در یک گزارش جامع: آیا ایده شما قابل اجرا و سودآور است؟',

        // How It Works
        'how-title': 'نحوه کار سیستم چند AI ما',
        'how-subtitle': 'چهار مرحله هوش مصنوعی برای اعتبارسنجی کامل بازار',
        'how-step1-title': '۱. شما ایده را ارسال می‌کنید',
        'how-step1-desc': 'فقط ایده کسب‌وکار خود را توصیف کنید - سیستم ما بقیه را انجام می‌دهد',
        'how-step2-title': '۲. تحقیق عمیق چند AI',
        'how-step2-desc': 'اسکرپ Reddit + جستجوی Perplexity + تحلیل Claude به صورت موازی',
        'how-step3-title': '۳. ترکیب AI و امتیازدهی',
        'how-step3-desc': 'تمام بینش‌های AI ترکیب می‌شوند: امتیاز سودآوری + تحلیل امکان‌پذیری',
        'how-step4-title': '۴. گزارش کامل دریافت کنید',
        'how-step4-desc': 'گزارش تفصیلی: تقاضای بازار، رقابت، پتانسیل درآمد و تصمیم برو/نرو',

        // Pricing Section
        'pricing-title': 'قیمت‌گذاری ساده و شفاف',
        'pricing-subtitle': 'رایگان شروع کنید، وقتی نیاز به اعتبارسنجی بیشتر دارید ارتقا دهید',
        'pricing1-name': 'رایگان',
        'pricing1-price': '$۰',
        'pricing1-time': '۱ اعتبارسنجی/ماه',
        'pricing1-feat1': 'امتیاز اعتبارسنجی پایه',
        'pricing1-feat2': '۳ مشکل برتر',
        'pricing1-feat3': 'تخمین اندازه بازار',
        'pricing1-feat4': 'پشتیبانی ایمیل',
        'pricing1-feat5': '—',
        'pricing1-btn': 'شروع رایگان',
        'pricing2-name': 'استارتر',
        'pricing2-price': '$۳۹',
        'pricing2-time': '۵ اعتبارسنجی/ماه',
        'pricing2-feat1': 'امتیاز کامل اعتبارسنجی (۰-۱۰)',
        'pricing2-feat2': '۵ مشکل برتر با نقل‌قول',
        'pricing2-feat3': 'محاسبات TAM/SAM/SOM',
        'pricing2-feat4': 'تحلیل رقابت',
        'pricing2-feat5': 'توصیه برو/نرو',
        'pricing2-btn': 'شروع کنید',
        'pricing2-popular': 'محبوب‌ترین',
        'pricing3-name': 'حرفه‌ای',
        'pricing3-price': '$۹۹',
        'pricing3-time': 'اعتبارسنجی نامحدود',
        'pricing3-feat1': 'همه چیز در استارتر',
        'pricing3-feat2': 'تحلیل تمایل به پرداخت',
        'pricing3-feat3': 'بررسی عمیق پروفایل مشتری',
        'pricing3-feat4': 'پشتیبانی اولویت‌دار',
        'pricing3-feat5': 'دسترسی API (به زودی)',
        'pricing3-btn': 'حرفه‌ای شوید',

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
