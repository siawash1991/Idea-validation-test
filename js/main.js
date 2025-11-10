// ============================================
// Google Apps Script URL Configuration
// ============================================
// IMPORTANT: Replace this with your actual Google Apps Script deployment URL
// Get this URL from: Extensions → Apps Script → Deploy → New Deployment
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

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
        signupCount.textContent = `Join ${count} other entrepreneurs`;
    } else {
        signupCount.textContent = 'Be the first to join!';
    }
}

// ============================================
// Loading State Management
// ============================================
function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Submitting...';
        spinner.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Join the Beta';
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
        showMessage('Please enter your name', 'error');
        return;
    }

    if (!email) {
        showMessage('Please enter your email', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Check if SCRIPT_URL is configured
    if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        showMessage('⚠️ Google Apps Script URL not configured. Please update SCRIPT_URL in main.js', 'error');
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
        showMessage('🎉 Success! You\'ve been added to the beta list. Check your email!', 'success');

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
        showMessage('Network error. Please check your connection and try again.', 'error');
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
    updateSignupCount();

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
