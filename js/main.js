// ============================================
// Google Apps Script URL Configuration
// ============================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJ1hUTuNWQEYgSy842Lbp4S-vEfwuC3zuZWm89VSS9zttKZjFIQYbK1mXpeIr--uwDzw/exec';

// ============================================
// Translations Object
// ============================================
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-problem': 'Why Validate?',
        'nav-solution': 'What You Get',
        'nav-pricing': 'Pricing',

        // Hero Section
        'hero-badge': 'Complete Research with AI Power',
        'hero-title': 'No Time to <span class="gradient-text">Validate</span> Your Idea?',
        'hero-subtitle': 'Our team uses AI power to conduct complete research on Reddit and Perplexity, finding all customer Pain Points for you!',
        'price-amount': '$20',
        'price-amount-fa': '2M Toman',
        'price-desc': 'Per complete idea validation',
        'trust-1': 'Delivery in 24 hours',
        'trust-2': 'Money-back guarantee',
        'trust-3': 'Complete PDF report',

        // Form
        'form-title': 'Submit your idea now!',
        'form-subtitle': 'We\'ll send you a complete report in less than 24 hours',
        'form-name-label': 'Full Name *',
        'form-name-placeholder': 'John Doe',
        'form-email-label': 'Email *',
        'form-email-placeholder': 'john@example.com',
        'form-phone-label': 'Phone Number',
        'form-phone-placeholder': '+1 555 123 4567',
        'form-idea-label': 'Describe your idea briefly *',
        'form-idea-placeholder': 'e.g., An app for managing daily expenses...',
        'form-submit-btn': 'Start Validation',
        'form-note': 'Your information is confidential and will not be shared',

        // Scroll
        'scroll-text': 'Learn more',

        // Why Section
        'why-badge': 'Shocking Statistics',
        'why-title': 'Why should you validate your idea before starting?',
        'stat1-title': 'Fail Due to No Demand',
        'stat1-desc': '42% of startups fail simply because no one wants their product!',
        'stat2-title': 'Average Capital Wasted',
        'stat2-desc': 'Average money founders lose before realizing their mistake',
        'stat3-title': 'Average Time Wasted',
        'stat3-desc': 'Time spent building something the market doesn\'t want',
        'problem1-title': 'Starting Without Research',
        'problem1-desc': 'You think your idea is great but don\'t know what people actually want',
        'problem2-title': 'No Time for Research',
        'problem2-desc': 'Market research takes months and you need to start quickly',
        'problem3-title': 'Don\'t Know Where to Research',
        'problem3-desc': 'Real data is scattered: Reddit, Twitter, forums...',
        'problem4-title': 'Fear of Failure',
        'problem4-desc': 'You don\'t know if your idea will succeed and it\'s stressful',

        // What You Get Section
        'get-badge': 'Complete Report',
        'get-title': 'What do you get from us?',
        'get-subtitle': 'A comprehensive report prepared with AI power and real source research',
        'step1-title': 'Submit Your Idea',
        'step1-desc': 'Just explain your idea in one line',
        'step2-title': 'AI Does Research',
        'step2-desc': 'Search in Reddit + Perplexity + other sources',
        'step3-title': 'Analysis & Scoring',
        'step3-desc': 'Pain Points + Competitors + Market Potential',
        'step4-title': 'Get PDF Report',
        'step4-desc': 'Complete report in 24 hours',
        'del1-title': 'Real Pain Points',
        'del1-desc': 'Real problems people have expressed on Reddit and forums - with links to original posts',
        'del2-title': 'Validation Score (0-10)',
        'del2-desc': 'A clear score showing how much potential your idea has',
        'del3-title': 'Competitor Analysis',
        'del3-desc': 'Who is solving this problem and how you can differentiate',
        'del4-title': 'Market Size Estimate',
        'del4-desc': 'TAM/SAM/SOM - How big is this market and how much can you capture',
        'del5-title': 'Willingness to Pay',
        'del5-desc': 'How much are people willing to pay to solve this problem?',
        'del6-title': 'Final Recommendation: GO/NO-GO',
        'del6-desc': 'A clear recommendation with reasoning: Build, pivot, or drop',

        // Sources Section
        'sources-badge': 'Data Sources',
        'sources-title': 'Where do we research?',
        'sources-subtitle': 'Combining AI with real data from across the internet',
        'source-reddit': 'Deep search in relevant subreddits to find real user problems',
        'source-perplexity': 'Deep research with latest market data and trends',
        'source-claude': 'Advanced analysis and combining all data for final report',

        // Pricing Section
        'pricing-badge': 'Simple Pricing',
        'pricing-title': 'One Price, One Complete Report',
        'pricing-subtitle': 'No complicated plans - just pay and get your report',
        'pricing-popular': 'Only Plan',
        'pricing-name': 'Complete Validation',
        'price-usd': 'USD',
        'price-toman': 'Toman',
        'price-per': 'Per idea',
        'feat1': 'Complete Reddit Research',
        'feat2': 'Deep Perplexity Search',
        'feat3': 'Claude AI Analysis',
        'feat4': '5+ Real Pain Points with Links',
        'feat5': 'Validation Score 0-10',
        'feat6': 'Competitor Analysis',
        'feat7': 'Market Size Estimate',
        'feat8': 'GO/NO-GO Recommendation',
        'feat9': 'Complete PDF Report',
        'feat10': 'Delivery in 24 Hours',
        'pricing-cta': 'Start Now',
        'guarantee': '100% money-back guarantee if not satisfied',

        // Social Proof
        'social-badge': 'Reviews',
        'social-title': 'Why do founders trust us?',
        'testimonial1': '"Saved me 6 months! Found out my idea had no market before wasting time and money."',
        'testimonial1-author': 'Ahmed K.',
        'testimonial1-role': 'Startup Founder',
        'testimonial2': '"The report was very complete. Real Pain Points with links to Reddit posts - exactly what I needed!"',
        'testimonial2-author': 'Sarah M.',
        'testimonial2-role': 'Product Manager',
        'testimonial3': '"Got the report before meeting investors. Really helped me speak with confidence."',
        'testimonial3-author': 'Mohammad R.',
        'testimonial3-role': 'Tech Founder',
        'stat-founders': '100+',
        'stat-founders-label': 'Founders',
        'stat-ideas': '250+',
        'stat-ideas-label': 'Ideas Reviewed',
        'stat-satisfaction': '98%',
        'stat-satisfaction-label': 'Satisfaction',
        'stat-time': '24h',
        'stat-time-label': 'Delivery Time',

        // CTA Section
        'cta-title': 'Ready to validate your idea?',
        'cta-subtitle': 'Before wasting time and money, make sure people actually want what you\'re building!',
        'cta-button': 'Start Now - Only $20',
        'cta-note': '100% Money-back Guarantee | 24 Hour Delivery',

        // Footer
        'footer-tagline': 'Idea Validation with AI Power',
        'footer-privacy': 'Privacy',
        'footer-terms': 'Terms',
        'footer-contact': 'Contact',
        'footer-copyright': '2025 IdeaValidator. All rights reserved.',

        // Messages
        'error-name-required': 'Please enter your name',
        'error-email-required': 'Please enter your email',
        'error-email-invalid': 'Please enter a valid email',
        'error-idea-required': 'Please describe your idea',
        'success-message': 'Success! We received your idea. Check your email for confirmation.',
        'error-network': 'Network error. Please try again.',
        'form-submitting': 'Submitting...'
    },
    fa: {
        // Navigation
        'nav-home': 'خانه',
        'nav-problem': 'چرا اعتبارسنجی؟',
        'nav-solution': 'چه می‌گیرید؟',
        'nav-pricing': 'قیمت',

        // Hero Section
        'hero-badge': 'تحقیق کامل با قدرت AI',
        'hero-title': 'وقت نداری ایده‌ات رو <span class="gradient-text">اعتبارسنجی</span> کنی؟',
        'hero-subtitle': 'تیم ما با قدرت هوش مصنوعی، یک تحقیق کامل در Reddit و Perplexity انجام میده و تمام نقاط درد (Pain Points) مشتریان رو برات پیدا می‌کنه!',
        'price-amount': '۲۰$',
        'price-amount-fa': '۲ میلیون تومان',
        'price-desc': 'برای هر ایده‌سنجی کامل',
        'trust-1': 'تحویل در ۲۴ ساعت',
        'trust-2': 'گارانتی بازگشت پول',
        'trust-3': 'گزارش کامل PDF',

        // Form
        'form-title': 'همین الان ایده‌ات رو ثبت کن!',
        'form-subtitle': 'ما در کمتر از ۲۴ ساعت گزارش کامل رو برات میفرستیم',
        'form-name-label': 'نام کامل *',
        'form-name-placeholder': 'علی احمدی',
        'form-email-label': 'ایمیل *',
        'form-email-placeholder': 'ali@example.com',
        'form-phone-label': 'شماره تماس',
        'form-phone-placeholder': '۰۹۱۲۳۴۵۶۷۸۹',
        'form-idea-label': 'ایده‌ات رو خلاصه بنویس *',
        'form-idea-placeholder': 'مثلاً: یک اپلیکیشن برای مدیریت هزینه‌های روزانه...',
        'form-submit-btn': 'شروع اعتبارسنجی',
        'form-note': 'اطلاعات شما محرمانه است و با کسی به اشتراک گذاشته نمی‌شود',

        // Scroll
        'scroll-text': 'بیشتر بدانید',

        // Why Section
        'why-badge': 'آمار تکان‌دهنده',
        'why-title': 'چرا باید قبل از شروع، ایده‌ات رو اعتبارسنجی کنی؟',
        'stat1-title': 'شکست به دلیل نبود تقاضا',
        'stat1-desc': '۴۲٪ استارتاپ‌ها فقط به این دلیل شکست می‌خورند که محصولشان را کسی نمی‌خواهد!',
        'stat2-title': 'میانگین هدررفت سرمایه',
        'stat2-desc': 'میانگین پولی که بنیان‌گذاران قبل از فهمیدن اشتباهشان از دست می‌دهند',
        'stat3-title': 'میانگین زمان هدررفته',
        'stat3-desc': 'زمانی که صرف ساخت چیزی می‌شود که بازار نمی‌خواهد',
        'problem1-title': 'بدون تحقیق شروع می‌کنی',
        'problem1-desc': 'فکر می‌کنی ایده‌ات عالیه ولی نمی‌دونی مردم واقعاً چی می‌خوان',
        'problem2-title': 'وقت تحقیق نداری',
        'problem2-desc': 'تحقیق بازار ماه‌ها طول می‌کشه و تو باید سریع شروع کنی',
        'problem3-title': 'نمی‌دونی کجا تحقیق کنی',
        'problem3-desc': 'داده‌های واقعی پراکنده‌ان: Reddit، Twitter، فروم‌ها...',
        'problem4-title': 'ترس از شکست',
        'problem4-desc': 'نمی‌دونی ایده‌ات موفق میشه یا نه و این استرس‌زاست',

        // What You Get Section
        'get-badge': 'گزارش کامل',
        'get-title': 'چی از ما دریافت می‌کنی؟',
        'get-subtitle': 'یک گزارش جامع که با قدرت AI و تحقیق در منابع واقعی آماده شده',
        'step1-title': 'ایده‌ات رو ثبت کن',
        'step1-desc': 'فقط ایده‌ات رو یه خط توضیح بده',
        'step2-title': 'AI تحقیق می‌کنه',
        'step2-desc': 'جستجو در Reddit + Perplexity + منابع دیگه',
        'step3-title': 'تحلیل و امتیازدهی',
        'step3-desc': 'Pain Points + رقبا + پتانسیل بازار',
        'step4-title': 'گزارش PDF دریافت کن',
        'step4-desc': 'گزارش کامل در ۲۴ ساعت',
        'del1-title': 'Pain Points واقعی',
        'del1-desc': 'مشکلات واقعی که مردم در Reddit و فروم‌ها بیان کردن - با لینک به پست‌های اصلی',
        'del2-title': 'امتیاز اعتبارسنجی (۰-۱۰)',
        'del2-desc': 'یک امتیاز واضح که نشون میده ایده‌ات چقدر پتانسیل داره',
        'del3-title': 'تحلیل رقبا',
        'del3-desc': 'چه کسایی این مشکل رو حل می‌کنن و چطور میتونی متمایز باشی',
        'del4-title': 'تخمین اندازه بازار',
        'del4-desc': 'TAM/SAM/SOM - این بازار چقدر بزرگه و چقدر میتونی ازش سهم ببری',
        'del5-title': 'تمایل به پرداخت',
        'del5-desc': 'مردم حاضرن چقدر برای حل این مشکل پول بدن؟',
        'del6-title': 'توصیه نهایی: برو/نرو',
        'del6-desc': 'یک توصیه واضح با دلیل: بساز، تغییر بده، یا رها کن',

        // Sources Section
        'sources-badge': 'منابع داده',
        'sources-title': 'از کجا تحقیق می‌کنیم؟',
        'sources-subtitle': 'ترکیب هوش مصنوعی با داده‌های واقعی از سراسر اینترنت',
        'source-reddit': 'جستجوی عمیق در ساب‌ردیت‌های مرتبط برای پیدا کردن مشکلات واقعی کاربران',
        'source-perplexity': 'تحقیق عمیق با جدیدترین داده‌ها و روندهای بازار',
        'source-claude': 'تحلیل پیشرفته و ترکیب همه داده‌ها برای گزارش نهایی',

        // Pricing Section
        'pricing-badge': 'قیمت ساده',
        'pricing-title': 'یک قیمت، یک گزارش کامل',
        'pricing-subtitle': 'بدون پلن‌های پیچیده - فقط پرداخت کن و گزارشت رو بگیر',
        'pricing-popular': 'تنها پلن',
        'pricing-name': 'اعتبارسنجی کامل',
        'price-usd': 'دلار',
        'price-toman': 'تومان',
        'price-per': 'برای هر ایده',
        'feat1': 'تحقیق کامل در Reddit',
        'feat2': 'جستجوی عمیق Perplexity',
        'feat3': 'تحلیل با Claude AI',
        'feat4': '۵+ Pain Point واقعی با لینک',
        'feat5': 'امتیاز اعتبارسنجی ۰-۱۰',
        'feat6': 'تحلیل رقبا',
        'feat7': 'تخمین اندازه بازار',
        'feat8': 'توصیه برو/نرو',
        'feat9': 'گزارش PDF کامل',
        'feat10': 'تحویل در ۲۴ ساعت',
        'pricing-cta': 'همین الان شروع کن',
        'guarantee': 'گارانتی ۱۰۰٪ بازگشت پول اگر راضی نبودی',

        // Social Proof
        'social-badge': 'نظرات',
        'social-title': 'چرا بنیان‌گذاران به ما اعتماد می‌کنن؟',
        'testimonial1': '"۶ ماه وقتم رو نجات داد! فهمیدم ایده‌ام بازار نداره قبل از اینکه پول و وقتم رو هدر بدم."',
        'testimonial1-author': 'احمد کریمی',
        'testimonial1-role': 'بنیان‌گذار استارتاپ',
        'testimonial2': '"گزارش خیلی کامل بود. Pain Points واقعی با لینک به پست‌های Reddit - دقیقاً چیزی که نیاز داشتم!"',
        'testimonial2-author': 'سارا محمدی',
        'testimonial2-role': 'Product Manager',
        'testimonial3': '"قبل از جلسه با سرمایه‌گذارها گزارش رو گرفتم. خیلی کمکم کرد که با اعتماد به نفس صحبت کنم."',
        'testimonial3-author': 'محمد رضایی',
        'testimonial3-role': 'Tech Founder',
        'stat-founders': '۱۰۰+',
        'stat-founders-label': 'بنیان‌گذار',
        'stat-ideas': '۲۵۰+',
        'stat-ideas-label': 'ایده بررسی شده',
        'stat-satisfaction': '۹۸٪',
        'stat-satisfaction-label': 'رضایت مشتری',
        'stat-time': '۲۴h',
        'stat-time-label': 'زمان تحویل',

        // CTA Section
        'cta-title': 'آماده‌ای ایده‌ات رو اعتبارسنجی کنی؟',
        'cta-subtitle': 'قبل از اینکه وقت و پولت رو هدر بدی، مطمئن شو که مردم واقعاً چیزی که می‌سازی رو می‌خوان!',
        'cta-button': 'همین الان شروع کن - فقط ۲۰$',
        'cta-note': 'گارانتی بازگشت ۱۰۰٪ پول | تحویل در ۲۴ ساعت',

        // Footer
        'footer-tagline': 'اعتبارسنجی ایده با قدرت AI',
        'footer-privacy': 'حریم خصوصی',
        'footer-terms': 'قوانین استفاده',
        'footer-contact': 'تماس با ما',
        'footer-copyright': '© ۲۰۲۵ IdeaValidator. تمامی حقوق محفوظ است.',

        // Messages
        'error-name-required': 'لطفاً نام خود را وارد کنید',
        'error-email-required': 'لطفاً ایمیل خود را وارد کنید',
        'error-email-invalid': 'لطفاً یک ایمیل معتبر وارد کنید',
        'error-idea-required': 'لطفاً ایده خود را توضیح دهید',
        'success-message': 'با موفقیت ثبت شد! ایده شما دریافت شد. ایمیل خود را چک کنید.',
        'error-network': 'خطای شبکه. لطفاً دوباره تلاش کنید.',
        'form-submitting': 'در حال ارسال...'
    }
};

// ============================================
// Current Language
// ============================================
let currentLang = localStorage.getItem('language') || 'fa';

// ============================================
// DOM Elements
// ============================================
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ideaInput = document.getElementById('idea');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const spinner = document.getElementById('spinner');
const formMessage = document.getElementById('formMessage');
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
        const translation = t(key);
        // Check if translation contains HTML
        if (translation.includes('<')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = t(key);
    });

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
    const idea = ideaInput ? ideaInput.value.trim() : '';

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

    if (ideaInput && !idea) {
        showMessage(t('error-idea-required'), 'error');
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
        formData.append('idea', idea);
        formData.append('language', currentLang);
        formData.append('timestamp', new Date().toISOString());

        // Send request to Google Apps Script
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        // Success handling
        showMessage(t('success-message'), 'success');

        // Clear form fields
        form.reset();

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
// Smooth Scroll for Anchor Links
// ============================================
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

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.glass-card, .stat-card, .problem-card, .deliverable-card, .source-main, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 26, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 26, 0.8)';
    }

    lastScroll = currentScroll;
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

    // Add hover effect to glass cards
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
