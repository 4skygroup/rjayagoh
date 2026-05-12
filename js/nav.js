const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

/* faq.js — Accordéon FAQ */

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    /* Fermer tous les items ouverts */
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-answer').style.maxHeight = null;
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    /* Ouvrir celui cliqué si il était fermé */
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      button.setAttribute('aria-expanded', 'true');
    }
  });
});