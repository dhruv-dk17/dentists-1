// ===== Promise Dental Clinic — Advanced Script v2 =====

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isOpen = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('span').textContent = '+';
        });

        // Toggle current item
        if (!isOpen) {
            faqItem.classList.add('active');
            button.querySelector('span').textContent = '−';
        }
    });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        // Simple alert for now, or could toggle a mobile overlay
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '90px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
}

// Form Handling (if exists)
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = appointmentForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = '✓ Request Received';
            btn.style.background = '#22c55e';
            btn.style.borderColor = '#22c55e';
            
            const successMsg = document.createElement('div');
            successMsg.className = 'card reveal active';
            successMsg.style.marginTop = '20px';
            successMsg.style.textAlign = 'center';
            successMsg.style.background = '#f0fdf4';
            successMsg.innerHTML = '<h3 style="color:#166534">Thank You!</h3><p>Dr. XYZ will call you shortly to confirm your visit.</p>';
            appointmentForm.appendChild(successMsg);
            
            appointmentForm.reset();
        }, 1500);
    });
}

// Real-time Business Hours Status
function updateBusinessHours() {
    const statusElements = document.querySelectorAll('.business-status');
    if (statusElements.length === 0) return;

    const now = new Date();
    // Get time in India Standard Time (IST, UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
    
    const day = istTime.getDay(); // 0 is Sunday
    const hour = istTime.getHours(); // 0-23

    // Business logic: Monday (1) to Saturday (6), 10:00 to 21:00
    let isOpen = false;
    let text = "";
    let color = "";

    if (day >= 1 && day <= 6 && hour >= 10 && hour < 21) {
        isOpen = true;
        text = "Open Now (Closes at 9 PM)";
        color = "#22c55e"; // Green
    } else {
        isOpen = false;
        text = "Closed (Opens at 10 AM)";
        color = "#ef4444"; // Red
    }

    statusElements.forEach(el => {
        el.innerHTML = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${color}; margin-right:5px;"></span><span style="color:${color}; font-weight:600; font-size: 0.875rem;">${text}</span>`;
    });
}

updateBusinessHours();
// Update every minute
setInterval(updateBusinessHours, 60000);
