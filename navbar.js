// 集中维护导航名称与地址，并根据当前页面设置高亮状态。
const navigationItems = {
  home: { href: 'index.html', label: '首页' },
  research: { href: 'research.html', label: '研究领域' },
  publications: { href: 'publications.html', label: '论文发表' },
  contact: { href: 'contact.html', label: '联系我们' }
};

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const navigationItem = navigationItems[link.dataset.navKey];
    if (!navigationItem) {
      return;
    }

    link.setAttribute('href', navigationItem.href);
    link.textContent = navigationItem.label;

    if (navigationItem.href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});