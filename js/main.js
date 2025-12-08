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
        'nav-report': 'Sample Report',
        'nav-sources': 'Research Sources',
        'nav-pricing': 'Pricing',

        // Hero Section
        'hero-badge': 'Deep Research + Smart Analysis',
        'hero-title': 'We <span class="gradient-text">Deeply</span> Analyze Your Idea',
        'hero-subtitle': 'We don\'t just search - we analyze real buyer comments on Digikala, Torob, Amazon, and Reddit to understand what problems people actually have and whether your idea will work!',
        'deep-desc': 'We read hundreds of real comments, extract customer pain points, and then deeply think about whether your idea solves these problems!',
        'price-amount': '$20',
        'price-amount-fa': '2M Toman',
        'price-desc': 'Per complete idea validation',
        'trust-1': 'Delivery in 48 hours',
        'trust-2': 'Money-back guarantee',
        'trust-3': 'Complete PDF report',

        // Form
        'form-title': 'Submit your info',
        'form-subtitle': 'So we can contact you and review your idea',
        'form-name-label': 'Full Name *',
        'form-name-placeholder': 'John Doe',
        'form-email-label': 'Email *',
        'form-email-placeholder': 'john@example.com',
        'form-phone-label': 'Phone Number *',
        'form-phone-placeholder': '+1 555 123 4567',
        'form-idea-label': 'Describe your idea briefly *',
        'form-idea-placeholder': 'e.g., An app for comparing appliance prices...',
        'form-submit-btn': '📞 Request Call',
        'form-note': 'Your information is confidential and will not be shared',

        // Scroll
        'scroll-text': 'See sample report',

        // Report Section
        'report-badge': '📊 Sample Report',
        'report-title': 'This is what you\'ll receive',
        'report-subtitle': 'A comprehensive report with real data from buyer comments',

        // Deep Research Section
        'deep-title': 'Deep Research + Deep Thinking',
        'deep-highlight': 'We don\'t just collect data - we analyze!',
        'deep-text1': 'What makes us different is that we read hundreds of real comments, find patterns, and then deeply think about whether your idea actually solves these problems.',
        'deep-text2': 'Our goal is to help you understand if your idea works - not just a soulless report!',

        // Sources Section
        'sources-badge': '🔬 Deep Research',
        'sources-title': 'How and where do we research?',
        'sources-subtitle': 'Combining Iranian and global sources + smart analysis',
        'source-reddit': 'Deep search in relevant subreddits to find real problems of global users',
        'source-perplexity': 'Deep research with latest market data and trends',
        'source-claude': 'Advanced analysis and combining all data for final report',

        // Why Section
        'why-badge': '⚠️ Shocking Statistics',
        'why-title': 'Why should you validate before starting?',
        'stat1-title': 'Fail Due to No Demand',
        'stat1-desc': '42% of startups fail simply because no one wants their product!',
        'stat2-title': 'Average Capital Wasted',
        'stat2-desc': 'Average money founders lose before realizing their mistake',
        'stat3-title': 'Average Time Wasted',
        'stat3-desc': 'Time spent building something the market doesn\'t want',

        // Pricing Section
        'pricing-badge': '💎 Simple Pricing',
        'pricing-title': 'One Price, One Complete Report',
        'pricing-subtitle': 'No complicated plans - just pay and get your report',
        'pricing-popular': 'Only Plan',
        'pricing-name': 'Deep Validation',
        'price-usd': 'USD',
        'price-toman': 'Toman',
        'price-per': 'Per idea',
        'feat1': 'Digikala & Torob comment analysis',
        'feat2': 'Amazon & Shopify research',
        'feat3': 'Deep Reddit search',
        'feat4': '5+ Real Pain Points with Links',
        'feat5': 'Validation Score 0-10',
        'feat6': 'Competitor Analysis',
        'feat7': 'Market Size Estimate',
        'feat8': 'GO/NO-GO with reasoning',
        'feat9': 'Complete PDF Report',
        'feat10': 'Delivery in 48 Hours',
        'pricing-cta': 'Request Call 📞',
        'guarantee': '100% money-back guarantee if not satisfied',

        // Social Proof
        'social-badge': '⭐ Reviews',
        'social-title': 'Why do founders trust us?',
        'testimonial1': '"They analyzed Digikala comments! I learned exactly what people want."',
        'testimonial1-author': 'Ahmed K.',
        'testimonial1-role': 'Startup Founder',
        'testimonial2': '"The report was very deep. Real Pain Points with direct links to comments!"',
        'testimonial2-author': 'Sarah M.',
        'testimonial2-role': 'Product Manager',
        'testimonial3': '"Their recommendation was right. They said don\'t go, but suggested alternatives."',
        'testimonial3-author': 'Mohammad R.',
        'testimonial3-role': 'Tech Founder',
        'stat-founders': '100+',
        'stat-founders-label': 'Founders',
        'stat-ideas': '250+',
        'stat-ideas-label': 'Ideas Reviewed',
        'stat-satisfaction': '98%',
        'stat-satisfaction-label': 'Satisfaction',
        'stat-time': '48h',
        'stat-time-label': 'Delivery Time',

        // CTA Section
        'cta-title': 'Ready to find out if your idea works?',
        'cta-subtitle': 'Before wasting time and money, let us do a deep analysis!',
        'cta-button': 'Request Call - Only $20 📞',
        'cta-note': '100% Money-back Guarantee | 48 Hour Delivery',

        // Footer
        'footer-tagline': 'Deep Research for Big Ideas',
        'footer-privacy': 'Privacy',
        'footer-terms': 'Terms',
        'footer-contact': 'Contact',
        'footer-copyright': '2025 IdeaValidator. All rights reserved.',

        // Messages
        'error-name-required': 'Please enter your name',
        'error-email-required': 'Please enter your email',
        'error-email-invalid': 'Please enter a valid email',
        'error-idea-required': 'Please describe your idea',
        'success-message': 'Success! We received your info. We\'ll contact you soon.',
        'error-network': 'Network error. Please try again.',
        'form-submitting': 'Submitting...'
    },
    fa: {
        // Navigation
        'nav-home': 'خانه',
        'nav-report': 'نمونه گزارش',
        'nav-sources': 'منابع تحقیق',
        'nav-pricing': 'قیمت',

        // Hero Section
        'hero-badge': 'تحقیق عمیق + تحلیل هوشمند',
        'hero-title': 'ایده‌ات رو <span class="gradient-text">عمیق</span> بررسی می‌کنیم',
        'hero-subtitle': 'ما فقط سرچ نمی‌کنیم - کامنت‌های واقعی خریداران در دیجی‌کالا، ترب، آمازون و Reddit رو تحلیل می‌کنیم تا بفهمیم مردم واقعاً چه دردی دارن و آیا ایده‌ات جواب میده یا نه!',
        'deep-desc': 'ما صدها کامنت واقعی رو می‌خونیم، دغدغه‌های مشتریان رو استخراج می‌کنیم، و بعد عمیق فکر می‌کنیم که آیا ایده‌ات این مشکلات رو حل می‌کنه یا نه!',
        'price-amount': '۲۰$',
        'price-amount-fa': '۲ میلیون تومان',
        'price-desc': 'برای هر ایده‌سنجی کامل',
        'trust-1': 'تحویل در ۴۸ ساعت',
        'trust-2': 'گارانتی بازگشت پول',
        'trust-3': 'گزارش کامل PDF',

        // Form
        'form-title': 'اطلاعاتت رو ثبت کن',
        'form-subtitle': 'تا باهات تماس بگیریم و ایده‌ات رو بررسی کنیم',
        'form-name-label': 'نام کامل *',
        'form-name-placeholder': 'علی احمدی',
        'form-email-label': 'ایمیل *',
        'form-email-placeholder': 'ali@example.com',
        'form-phone-label': 'شماره تماس *',
        'form-phone-placeholder': '۰۹۱۲۳۴۵۶۷۸۹',
        'form-idea-label': 'ایده‌ات رو خلاصه بنویس *',
        'form-idea-placeholder': 'مثلاً: یک اپلیکیشن برای مقایسه قیمت لوازم خانگی...',
        'form-submit-btn': '📞 درخواست تماس',
        'form-note': 'اطلاعات شما محرمانه است و با کسی به اشتراک گذاشته نمی‌شود',

        // Scroll
        'scroll-text': 'نمونه گزارش رو ببین',

        // Report Section
        'report-badge': '📊 نمونه گزارش',
        'report-title': 'این چیزیه که تحویل می‌گیری',
        'report-subtitle': 'یک گزارش جامع با داده‌های واقعی از کامنت‌های خریداران',

        // Deep Research Section
        'deep-title': 'تحقیق عمیق + فکر عمیق',
        'deep-highlight': 'ما فقط داده جمع نمی‌کنیم - تحلیل می‌کنیم!',
        'deep-text1': 'فرق ما با بقیه اینه که صدها کامنت واقعی رو می‌خونیم، الگوها رو پیدا می‌کنیم، و بعد عمیق فکر می‌کنیم که آیا ایده‌ات واقعاً این مشکلات رو حل می‌کنه یا نه.',
        'deep-text2': 'هدف ما اینه که بفهمی ایده‌ات کارساز هست یا نه - نه فقط یه گزارش بی‌روح!',

        // Sources Section
        'sources-badge': '🔬 تحقیق عمیق',
        'sources-title': 'چطور و از کجا تحقیق می‌کنیم؟',
        'sources-subtitle': 'ترکیب منابع ایرانی و جهانی + تحلیل هوشمند',
        'source-reddit': 'جستجوی عمیق در ساب‌ردیت‌های مرتبط برای پیدا کردن مشکلات واقعی کاربران جهانی',
        'source-perplexity': 'تحقیق عمیق با جدیدترین داده‌ها و روندهای بازار',
        'source-claude': 'تحلیل پیشرفته و ترکیب همه داده‌ها برای گزارش نهایی',

        // Why Section
        'why-badge': '⚠️ آمار تکان‌دهنده',
        'why-title': 'چرا باید قبل از شروع بررسی کنی؟',
        'stat1-title': 'شکست به دلیل نبود تقاضا',
        'stat1-desc': '۴۲٪ استارتاپ‌ها فقط به این دلیل شکست می‌خورند که محصولشان را کسی نمی‌خواهد!',
        'stat2-title': 'میانگین هدررفت سرمایه',
        'stat2-desc': 'میانگین پولی که بنیان‌گذاران قبل از فهمیدن اشتباهشان از دست می‌دهند',
        'stat3-title': 'میانگین زمان هدررفته',
        'stat3-desc': 'زمانی که صرف ساخت چیزی می‌شود که بازار نمی‌خواهد',

        // Pricing Section
        'pricing-badge': '💎 قیمت ساده',
        'pricing-title': 'یک قیمت، یک گزارش کامل',
        'pricing-subtitle': 'بدون پلن‌های پیچیده - فقط پرداخت کن و گزارشت رو بگیر',
        'pricing-popular': 'تنها پلن',
        'pricing-name': 'اعتبارسنجی عمیق',
        'price-usd': 'دلار',
        'price-toman': 'تومان',
        'price-per': 'برای هر ایده',
        'feat1': 'بررسی کامنت‌های دیجی‌کالا و ترب',
        'feat2': 'تحقیق در آمازون و شاپیفای',
        'feat3': 'جستجوی عمیق Reddit',
        'feat4': '۵+ Pain Point واقعی با لینک',
        'feat5': 'امتیاز اعتبارسنجی ۰-۱۰',
        'feat6': 'تحلیل رقبا',
        'feat7': 'تخمین اندازه بازار',
        'feat8': 'توصیه برو/نرو با دلیل',
        'feat9': 'گزارش PDF کامل',
        'feat10': 'تحویل در ۴۸ ساعت',
        'pricing-cta': 'درخواست تماس 📞',
        'guarantee': 'گارانتی ۱۰۰٪ بازگشت پول اگر راضی نبودی',

        // Social Proof
        'social-badge': '⭐ نظرات',
        'social-title': 'چرا بنیان‌گذاران به ما اعتماد می‌کنن؟',
        'testimonial1': '"کامنت‌های دیجی‌کالا رو تحلیل کرده بودن! فهمیدم مردم دقیقاً چی می‌خوان."',
        'testimonial1-author': 'احمد کریمی',
        'testimonial1-role': 'بنیان‌گذار استارتاپ',
        'testimonial2': '"گزارش خیلی عمیق بود. Pain Points واقعی با لینک مستقیم به کامنت‌ها!"',
        'testimonial2-author': 'سارا محمدی',
        'testimonial2-role': 'Product Manager',
        'testimonial3': '"توصیه‌شون درست بود. گفتن نرو، ولی راه جایگزین هم پیشنهاد دادن."',
        'testimonial3-author': 'محمد رضایی',
        'testimonial3-role': 'Tech Founder',
        'stat-founders': '۱۰۰+',
        'stat-founders-label': 'بنیان‌گذار',
        'stat-ideas': '۲۵۰+',
        'stat-ideas-label': 'ایده بررسی شده',
        'stat-satisfaction': '۹۸٪',
        'stat-satisfaction-label': 'رضایت مشتری',
        'stat-time': '۴۸h',
        'stat-time-label': 'زمان تحویل',

        // CTA Section
        'cta-title': 'آماده‌ای بفهمی ایده‌ات کارساز هست یا نه؟',
        'cta-subtitle': 'قبل از اینکه وقت و پولت رو هدر بدی، بذار ما عمیق بررسی کنیم!',
        'cta-button': 'درخواست تماس - فقط ۲۰$ 📞',
        'cta-note': 'گارانتی بازگشت ۱۰۰٪ پول | تحویل در ۴۸ ساعت',

        // Footer
        'footer-tagline': 'تحقیق عمیق برای ایده‌های بزرگ',
        'footer-privacy': 'حریم خصوصی',
        'footer-terms': 'قوانین استفاده',
        'footer-contact': 'تماس با ما',
        'footer-copyright': '© ۲۰۲۵ IdeaValidator. تمامی حقوق محفوظ است.',

        // Messages
        'error-name-required': 'لطفاً نام خود را وارد کنید',
        'error-email-required': 'لطفاً ایمیل خود را وارد کنید',
        'error-email-invalid': 'لطفاً یک ایمیل معتبر وارد کنید',
        'error-idea-required': 'لطفاً ایده خود را توضیح دهید',
        'success-message': 'با موفقیت ثبت شد! به زودی باهات تماس می‌گیریم.',
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
