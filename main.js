// MOVI — main.js

// Burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Scroll: shrink nav slightly
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.borderBottomColor = '#bbb';
    } else {
      nav.style.borderBottomColor = '';
    }
  });
}

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step, .drop-card, .archive-item, .value-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Re-observe after DOM ready
  setTimeout(() => {
    document.querySelectorAll('.step, .drop-card, .archive-item, .value-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  }, 100);
});

// Add .visible styles
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
