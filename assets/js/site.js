(() => {
  document.documentElement.classList.add('js-enabled');

  const header = document.querySelector('[data-site-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const navigation = document.querySelector('[data-global-nav]');
  const toggleLabel = toggle?.querySelector('.nav-toggle__label');

  if (!header || !toggle || !navigation) return;

  const desktopQuery = window.matchMedia('(min-width: 64rem)');

  const closeNavigation = () => {
    toggle.setAttribute('aria-expanded', 'false');
    if (toggleLabel) toggleLabel.textContent = 'Menu';
    navigation.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  const openNavigation = () => {
    toggle.setAttribute('aria-expanded', 'true');
    if (toggleLabel) toggleLabel.textContent = 'Close';
    navigation.classList.add('is-open');
    document.body.classList.add('nav-open');
    window.requestAnimationFrame(() => navigation.querySelector('a')?.focus());
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeNavigation();
    else openNavigation();
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      toggle.focus();
    }

    if (event.key === 'Tab' && toggle.getAttribute('aria-expanded') === 'true') {
      const focusableItems = [toggle, ...navigation.querySelectorAll('a[href]')];
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }
  });

  const handleDesktopChange = (event) => {
    if (event.matches) closeNavigation();
  };

  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleDesktopChange);
  else desktopQuery.addListener(handleDesktopChange);

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
