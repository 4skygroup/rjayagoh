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

/* calendly */

document.getElementById('btn-calendly').addEventListener('click', function () {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nom || !prenom || !email) {
        alert('Merci de remplir au moins votre nom, prénom et email.');
        return;
    }

    const form = document.querySelector('.contact-form');
    fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
    });

    Calendly.initPopupWidget({
        url: 'https://calendly.com/robbinjamesagoh/30min',
        prefill: {
            name: prenom + ' ' + nom,
            email: email
        }
    });
});