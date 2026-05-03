// A4Motos — main.js

// Burger menu
const burger = document.getElementById('menuBtn');
const nav = document.querySelector('.navbar');
if (burger) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}

// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
fadeEls.forEach(el => observer.observe(el));

// Range slider precio
const range = document.getElementById('precioRange');
const rangeVal = document.getElementById('precioVal');
if (range && rangeVal) {
  range.addEventListener('input', () => {
    const v = parseInt(range.value).toLocaleString('es-CO');
    rangeVal.textContent = '$' + v;
  });
}

// Formulario contacto
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    btn.textContent = '✓ ¡Mensaje enviado!';
    btn.style.background = '#1a8a1a';
    setTimeout(() => {
      btn.textContent = 'Enviar Mensaje';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// Active nav link
const links = document.querySelectorAll('.nav__links a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});
