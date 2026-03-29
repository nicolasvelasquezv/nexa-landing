/* ================================================================
   NEXA LIMPIEZA PROFESIONAL — script.js
   ================================================================ */

'use strict';

/* ── 1. NAV: scroll effect ─────────────────────────────────── */
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── 2. MOBILE MENU ─────────────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── 3. SCROLL ANIMATIONS ───────────────────────────────────── */
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate').forEach(el => animObserver.observe(el));

/* ── 4. COUNTER ANIMATION ───────────────────────────────────── */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 1800;
      const start  = performance.now();

      function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / dur, 1);
        el.textContent = Math.round(easeOutCubic(progress) * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('.stats__num[data-target]').forEach(el => counterObserver.observe(el));

/* ── 5. SMOOTH SCROLL (anchor links) ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 12;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── 6. WHATSAPP FLOAT: hide on footer overlap ──────────────── */
const waFloat = document.querySelector('.whatsapp-float');
const footer  = document.querySelector('.footer');

if (waFloat && footer) {
  const floatObserver = new IntersectionObserver(
    ([entry]) => {
      waFloat.style.opacity = entry.isIntersecting ? '0' : '1';
      waFloat.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    },
    { threshold: 0.1 }
  );
  floatObserver.observe(footer);
}
