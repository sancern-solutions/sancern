document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('.lemon-link').forEach((link) => {
    link.addEventListener('click', () => {
      const plan = link.getAttribute('data-plan') || 'Unknown';
      console.info(`Launching Lemon Squeezy checkout for ${plan}`);
    });
  });
});
