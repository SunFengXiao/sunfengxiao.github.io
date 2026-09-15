// Maintains English navigation labels, destinations, and the active-page state.
const navigationItems = {
  home: { href: 'index-en.html', label: 'Home' },
  research: { href: 'research-en.html', label: 'Research' },
  publications: { href: 'publications-en.html', label: 'Publications' },
  contact: { href: 'contact-en.html', label: 'Contact' }
};

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index-en.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const navigationItem = navigationItems[link.dataset.navKey];
    if (!navigationItem) {
      return;
    }

    link.setAttribute('href', navigationItem.href);
    link.textContent = navigationItem.label;
    link.classList.toggle('active', navigationItem.href === currentPage);
  });
});
