// ============================================
// Translations Object
// ============================================
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-what-is': 'Vibe Researching',
        'nav-services': 'Services',
        'nav-how': 'Process',
        'nav-pricing': 'Pricing',
        'nav-order': 'Order Research',

        // Hero Section
        'hero-badge': 'Inspired by Naval Ravikant\'s Vibe Researching concept',
        'hero-title': 'Vibe Researching — Professional Research Powered by AI',
        'hero-subtitle': 'From idea validation to market analysis — get research that would take weeks, delivered in days',
        'hero-cta': 'Order Research',
        'hero-cta-secondary': 'Free Sample Report',

        // What Is Section
        'whatis-title': 'What is Vibe Researching?',
        'whatis-desc': 'Vibe Researching means leveraging the power of AI for deep research. I research on your behalf — using the best AI tools like Claude, Perplexity, and ChatGPT Deep Research — and deliver results as a professional, actionable report.',
        'whatis-card1-title': 'AI-Powered Research',
        'whatis-card1-desc': 'I use Claude, Perplexity, and ChatGPT for deep research',
        'whatis-card2-title': 'Professional Reports',
        'whatis-card2-desc': 'Results delivered as structured reports with data and sources',
        'whatis-card3-title': 'Fast & Accurate',
        'whatis-card3-desc': 'Research that takes weeks, done in 1 to 10 days',

        // Services Section
        'services-title': 'What Research Do I Offer?',
        'service1-title': 'Idea Validation',
        'service1-desc': 'Does your idea have a market? Who are the competitors? TAM/SAM/SOM analysis',
        'service2-title': 'Market Research',
        'service2-desc': 'Market size, trends, growth, and customer personas',
        'service3-title': 'Competitive Analysis',
        'service3-desc': 'Detailed competitor comparison, revenue models, market gaps',
        'service4-title': 'Market Entry Research',
        'service4-desc': 'Research for entering new markets: regulations, licenses, opportunities',
        'service5-title': 'Tech Research',
        'service5-desc': 'Best tools, APIs, and technical solutions for building your product',
        'service6-title': 'Content Research',
        'service6-desc': 'What content works in your niche? Content trend analysis',

        // How It Works
        'how-title': 'How Does It Work?',
        'how-step1-title': 'Place Your Order',
        'how-step1-desc': 'Share your idea or question and choose your preferred tier',
        'how-step2-title': 'Review & Start',
        'how-step2-desc': 'I review the order, ask clarifying questions, and get started',
        'how-step3-title': 'Deep AI Research',
        'how-step3-desc': 'I conduct research using the best AI tools and write the report',
        'how-step4-title': 'Delivery + Follow-up',
        'how-step4-desc': 'I deliver the PDF report + 15 minutes free explanation call',

        // Pricing Section
        'pricing-title': 'Pricing Plans',
        'pricing-btn': 'Order This Plan',
        'pricing1-name': 'Quick Vibe',
        'pricing1-price': '$25',
        'pricing1-feat1': '2-3 page report',
        'pricing1-feat2': 'Delivered in 24 hours',
        'pricing1-feat3': '1 research topic',
        'pricing1-feat4': 'Executive summary + key findings',
        'pricing1-suitable': 'Best for: Quick questions and initial review',
        'pricing2-popular': 'POPULAR',
        'pricing2-name': 'Deep Vibe',
        'pricing2-price': '$85',
        'pricing2-feat1': '10+ page report',
        'pricing2-feat2': 'Delivered in 3-5 days',
        'pricing2-feat3': 'Competitor analysis + SWOT',
        'pricing2-feat4': 'Reliable data and sources',
        'pricing2-feat5': '15 min free explanation call',
        'pricing2-suitable': 'Best for: Idea validation and market analysis',
        'pricing3-name': 'Full Research',
        'pricing3-price': '$250',
        'pricing3-feat1': '20+ page comprehensive report',
        'pricing3-feat2': 'Delivered in 7-10 days',
        'pricing3-feat3': 'Full market + competitor + strategy research',
        'pricing3-feat4': 'Step-by-step action plan',
        'pricing3-feat5': '30 min consultation call',
        'pricing3-feat6': '7-day free follow-up',
        'pricing3-suitable': 'Best for: Startups and major business decisions',

        // Sample Report Section
        'sample-title': 'See a Sample Report',
        'sample-desc': 'View a real sample report from an AI-powered Persian grammar checker idea validation to see exactly what you\'ll receive.',
        'sample-includes': 'Executive Summary \u2022 Market Analysis \u2022 Competitor Analysis \u2022 SWOT \u2022 Scorecard \u2022 Entry Strategy \u2022 Next Steps',
        'sample-cta': 'Download Free Sample Report (PDF)',

        // Trust Section
        'trust-title': 'Why Trust Me?',
        'trust-item1': '65,000+ Instagram followers in AI education',
        'trust-item2': 'Translator of The Almanack of Naval Ravikant to Persian',
        'trust-item3': 'AI tools expert: Claude, ChatGPT, Perplexity',
        'trust-item4': 'Multiple research projects from startup validation to international market analysis',
        'trust-item5': 'Air Traffic Controller — precision and analysis is in my DNA',

        // FAQ Section
        'faq-title': 'Frequently Asked Questions',
        'faq1-q': 'How is your research different from regular searching?',
        'faq1-a': 'I use multiple advanced AI tools simultaneously and cross-reference the results. Then I deliver findings as a structured report with data, sources, and actionable recommendations.',
        'faq2-q': 'Can I order a custom topic?',
        'faq2-a': 'Yes! Any research topic from startup idea validation to market analysis of a specific country — just explain what information you need.',
        'faq3-q': 'What is the delivery time?',
        'faq3-a': 'Depends on the plan: Quick Vibe in 24 hours, Deep Vibe in 3-5 days, Full Research in 7-10 days.',
        'faq4-q': 'What if I\'m not satisfied with the report?',
        'faq4-a': 'If the report doesn\'t meet your expectations, I\'ll do one free revision. Your satisfaction is my priority.',
        'faq5-q': 'How do I pay?',
        'faq5-a': 'For Iranian users via card-to-card or ZarinPal, and for international users via Stripe and PayPal.',

        // Contact Section
        'contact-title': 'Ready to Start Your Research?',
        'contact-subtitle': 'Order now or ask your question',
        'contact-whatsapp': 'Message on WhatsApp',
        'contact-cta': 'Order Research',

        // Footer
        'footer-tagline': 'Powered by AI. Delivered by Human.',
        'footer-copyright': '\u00a9 2026 VibeResearch.io. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service'
    },
    fa: {
        // Navigation
        'nav-home': 'خانه',
        'nav-what-is': 'Vibe Researching',
        'nav-services': 'خدمات',
        'nav-how': 'فرآیند کار',
        'nav-pricing': 'قیمت\u200cگذاری',
        'nav-order': 'سفارش تحقیق',

        // Hero Section
        'hero-badge': 'Inspired by Naval Ravikant\'s Vibe Researching concept',
        'hero-title': 'Vibe Researching \u2014 تحقیقات حرفه\u200cای با قدرت AI',
        'hero-subtitle': 'از اعتبارسنجی ایده تا تحلیل بازار \u2014 تحقیقاتی که هفته\u200cها طول میکشه رو در چند روز تحویل بگیرید',
        'hero-cta': 'سفارش تحقیق',
        'hero-cta-secondary': 'نمونه گزارش رایگان',

        // What Is Section
        'whatis-title': 'Vibe Researching چیست؟',
        'whatis-desc': 'مفهوم Vibe Researching یعنی استفاده از قدرت هوش مصنوعی برای انجام تحقیقات عمیق. من به جای شما تحقیق میکنم \u2014 با بهترین ابزارهای AI مثل Claude, Perplexity و ChatGPT Deep Research \u2014 و نتیجه رو در قالب یک گزارش حرفه\u200cای و قابل اقدام تحویل میدم.',
        'whatis-card1-title': 'تحقیق با AI',
        'whatis-card1-desc': 'از Claude, Perplexity و ChatGPT برای تحقیق عمیق استفاده میکنم',
        'whatis-card2-title': 'گزارش حرفه\u200cای',
        'whatis-card2-desc': 'نتایج رو در قالب گزارش ساختاریافته با داده و منبع تحویل میدم',
        'whatis-card3-title': 'سریع و دقیق',
        'whatis-card3-desc': 'تحقیقاتی که هفته\u200cها طول میکشه رو در ۱ تا ۱۰ روز انجام میدم',

        // Services Section
        'services-title': 'چه تحقیقاتی انجام میدم؟',
        'service1-title': 'اعتبارسنجی ایده (Idea Validation)',
        'service1-desc': 'آیا ایده\u200cتون بازار داره؟ رقبا کیان؟ تحلیل TAM/SAM/SOM',
        'service2-title': 'تحقیقات بازار (Market Research)',
        'service2-desc': 'اندازه بازار، ترندها، رشد، و پرسونای مشتری',
        'service3-title': 'تحلیل رقبا (Competitive Analysis)',
        'service3-desc': 'مقایسه دقیق رقبا، مدل درآمدی، شکاف\u200cهای بازار',
        'service4-title': 'تحقیقات ورود به بازار (Market Entry)',
        'service4-desc': 'تحقیق برای ورود به بازارهای جدید: قوانین، مجوزها، فرصت\u200cها',
        'service5-title': 'تحقیقات فنی (Tech Research)',
        'service5-desc': 'بهترین ابزارها، APIها و راه\u200cحل\u200cهای فنی برای ساخت محصول',
        'service6-title': 'تحقیقات محتوایی (Content Research)',
        'service6-desc': 'چه محتوایی در نیچ شما کار میکنه؟ تحلیل ترند محتوا',

        // How It Works
        'how-title': 'فرآیند کار چطوریه؟',
        'how-step1-title': 'ثبت سفارش',
        'how-step1-desc': 'ایده یا سؤالتون رو مطرح کنید و تیر مورد نظرتون رو انتخاب کنید',
        'how-step2-title': 'بررسی و شروع',
        'how-step2-desc': 'سفارش رو بررسی میکنم، سؤالات تکمیلی میپرسم و شروع میکنم',
        'how-step3-title': 'تحقیق عمیق با AI',
        'how-step3-desc': 'با بهترین ابزارهای AI تحقیق رو انجام میدم و گزارش رو مینویسم',
        'how-step4-title': 'تحویل + فالوآپ',
        'how-step4-desc': 'گزارش PDF رو تحویل میدم + ۱۵ دقیقه جلسه رایگان توضیح',

        // Pricing Section
        'pricing-title': 'پلن\u200cهای قیمت\u200cگذاری',
        'pricing-btn': 'سفارش این پلن',
        'pricing1-name': 'Quick Vibe',
        'pricing1-price': '$25',
        'pricing1-feat1': 'گزارش ۲-۳ صفحه\u200cای',
        'pricing1-feat2': 'تحویل در ۲۴ ساعت',
        'pricing1-feat3': '۱ موضوع تحقیقاتی',
        'pricing1-feat4': 'خلاصه اجرایی + یافته\u200cهای کلیدی',
        'pricing1-suitable': 'مناسب برای: سؤالات سریع و بررسی اولیه',
        'pricing2-popular': 'محبوب\u200cترین',
        'pricing2-name': 'Deep Vibe',
        'pricing2-price': '$85',
        'pricing2-feat1': 'گزارش ۱۰+ صفحه\u200cای',
        'pricing2-feat2': 'تحویل در ۳-۵ روز',
        'pricing2-feat3': 'تحلیل رقبا + SWOT',
        'pricing2-feat4': 'داده\u200cها و منابع معتبر',
        'pricing2-feat5': '۱۵ دقیقه جلسه توضیح رایگان',
        'pricing2-suitable': 'مناسب برای: اعتبارسنجی ایده و تحلیل بازار',
        'pricing3-name': 'Full Research',
        'pricing3-price': '$250',
        'pricing3-feat1': 'گزارش ۲۰+ صفحه\u200cای جامع',
        'pricing3-feat2': 'تحویل در ۷-۱۰ روز',
        'pricing3-feat3': 'تحقیق کامل بازار + رقبا + استراتژی',
        'pricing3-feat4': 'اکشن پلن مرحله به مرحله',
        'pricing3-feat5': '۳۰ دقیقه جلسه مشاوره',
        'pricing3-feat6': 'فالوآپ ۷ روزه رایگان',
        'pricing3-suitable': 'مناسب برای: استارتاپ\u200cها و تصمیمات مهم کسب\u200cوکاری',

        // Sample Report Section
        'sample-title': 'نمونه گزارش را ببینید',
        'sample-desc': 'یک گزارش نمونه واقعی از اعتبارسنجی ایده \u00abگرامرچکر فارسی با AI\u00bb را ببینید تا دقیقاً بدانید چه چیزی تحویل میگیرید.',
        'sample-includes': 'خلاصه اجرایی \u2022 تحلیل بازار \u2022 تحلیل رقبا \u2022 SWOT \u2022 کارت امتیازی \u2022 استراتژی ورود \u2022 اقدامات بعدی',
        'sample-cta': 'دانلود نمونه گزارش رایگان (PDF)',

        // Trust Section
        'trust-title': 'چرا به من اعتماد کنید؟',
        'trust-item1': 'بیش از ۶۵,۰۰۰ فالوئر در اینستاگرام در حوزه آموزش AI',
        'trust-item2': 'مترجم کتاب آلماناک ناوال راویکانت به فارسی',
        'trust-item3': 'متخصص ابزارهای هوش مصنوعی: Claude, ChatGPT, Perplexity',
        'trust-item4': 'سابقه تحقیقات متعدد از ایده\u200cسنجی استارتاپ تا تحلیل بازار بین\u200cالمللی',
        'trust-item5': 'کنترلر ترافیک هوایی \u2014 دقت و تحلیل در DNA من است',

        // FAQ Section
        'faq-title': 'سؤالات متداول',
        'faq1-q': 'تحقیقات شما با سرچ معمولی چه فرقی داره؟',
        'faq1-a': 'من از چندین ابزار AI پیشرفته به صورت همزمان استفاده میکنم و نتایج رو cross-reference میکنم. بعد نتایج رو در قالب یک گزارش ساختاریافته با داده، منبع و توصیه عملی تحویل میدم.',
        'faq2-q': 'آیا میتونم موضوع خاصی سفارش بدم؟',
        'faq2-a': 'بله! هر موضوع تحقیقاتی از اعتبارسنجی ایده استارتاپ تا تحلیل بازار یک کشور خاص \u2014 فقط کافیه توضیح بدید چه اطلاعاتی نیاز دارید.',
        'faq3-q': 'زمان تحویل چقدره؟',
        'faq3-a': 'بسته به پلن: Quick Vibe در ۲۴ ساعت، Deep Vibe در ۳-۵ روز، Full Research در ۷-۱۰ روز.',
        'faq4-q': 'اگه از گزارش راضی نبودم چی؟',
        'faq4-a': 'اگه گزارش انتظارتون رو برآورده نکرد، یک بار revision رایگان انجام میدم. رضایت شما اولویت منه.',
        'faq5-q': 'پرداخت چطوری انجام میشه؟',
        'faq5-a': 'برای کاربران ایرانی از طریق کارت به کارت یا زرین\u200cپال، و برای کاربران بین\u200cالمللی از طریق Stripe و PayPal.',

        // Contact Section
        'contact-title': 'آماده\u200cاید تحقیقتون رو شروع کنیم؟',
        'contact-subtitle': 'همین الان سفارش بدید یا سؤالتون رو بپرسید',
        'contact-whatsapp': 'پیام در واتساپ',
        'contact-cta': 'سفارش تحقیق',

        // Footer
        'footer-tagline': 'Powered by AI. Delivered by Human.',
        'footer-copyright': '\u00a9 2026 VibeResearch.io. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service'
    }
};

// ============================================
// Current Language
// ============================================
let currentLang = localStorage.getItem('language') || 'fa';

// ============================================
// DOM Elements
// ============================================
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
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
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
// FAQ Accordion
// ============================================
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ============================================
// Scroll Animation (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for items in grids
                const parent = entry.target.parentElement;
                const siblings = Array.from(parent.children);
                const itemIndex = siblings.indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, itemIndex * 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableSelectors = [
        '.whatis-card',
        '.service-card',
        '.pricing-card',
        '.trust-item',
        '.timeline-item',
        '.faq-item'
    ];

    animatableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });
}

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

    // Initialize FAQ accordion
    initFAQ();

    // Initialize scroll animations
    initScrollAnimations();
});
