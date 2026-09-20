(() => {
  const menu = document.querySelector('.mobile-nav');
  if (!menu) return;

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) menu.open = false;
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });

  const desktop = window.matchMedia('(min-width: 821px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) menu.open = false;
  });
})();
