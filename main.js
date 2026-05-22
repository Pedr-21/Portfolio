/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

/* ── Typed name animation (esquerda → direita, uma vez só) ── */
function initTyping() {
  const el   = document.getElementById('typed-name');
  const name = el.dataset.name;
  let i = 0;

  function typeChar() {
    if (i < name.length) {
      el.textContent = name.slice(0, ++i);
      setTimeout(typeChar, 85);
    } else {
      el.classList.add('cursor-done'); // remove cursor piscante
    }
  }

  setTimeout(typeChar, 1300); // aguarda animação do título
}

/* ── Scroll reveal ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ── Nav link highlight on scroll ── */
function initNavHighlight() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });

    navLinks.forEach((a) => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color = isActive ? 'var(--navy)' : '';
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initTyping();
  initScrollReveal();
  initNavHighlight();
});
