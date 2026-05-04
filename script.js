// === NAV SCROLL ===
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// === MOBILE MENU ===
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
});

// === TYPEWRITER ===
const twEl = document.getElementById('typewriter');
if (twEl) {
  const words = ["Cybersécurité", "Administration Serveur", "Réseaux & VPN", "Active Directory", "Virtualisation"];
  let wi = 0;
  function typeWord() {
    const word = words[wi];
    let ci = 0;
    twEl.textContent = '';
    const typing = setInterval(() => {
      twEl.textContent += word[ci]; ci++;
      if (ci >= word.length) { clearInterval(typing); setTimeout(deleteWord, 2000); }
    }, 80);
  }
  function deleteWord() {
    const del = setInterval(() => {
      twEl.textContent = twEl.textContent.slice(0, -1);
      if (twEl.textContent.length === 0) {
        clearInterval(del);
        wi = (wi + 1) % words.length;
        setTimeout(typeWord, 400);
      }
    }, 40);
  }
  setTimeout(typeWord, 1000);
}

// === SCROLL REVEAL ===
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// === SCROLL TO TOP ===
const sttBtn = document.getElementById('scrollTopBtn');
if (sttBtn) {
  window.addEventListener('scroll', () => sttBtn.classList.toggle('show', window.scrollY > 500));
  sttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// === SMOOTH NAV ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
