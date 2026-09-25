/**
 * Litquidity Theme Controller
 * Pixel-perfect interactivity for Blog Theme
 */

(function () {
  'use strict';

  // 1. Initial State
  function initPage() {
    document.body.classList.add('loaded');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }

  // 2. Header Scroll Effect
  function handleScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    if (window.pageYOffset > 10) {
      header.classList.add('has-scrolled');
    } else {
      header.classList.remove('has-scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Live Wall Street (New York) Clock
  function updateWallStreetClock() {
    const dateEl = document.getElementById('clock-date');
    const timeEl = document.getElementById('clock-time');
    if (!dateEl && !timeEl) return;

    const now = new Date();
    try {
      if (dateEl) {
        const dateOptions = {
          timeZone: 'America/New_York',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        };
        dateEl.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
      }
      if (timeEl) {
        const timeOptions = {
          timeZone: 'America/New_York',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZoneName: 'short'
        };
        timeEl.textContent = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
      }
    } catch (err) {
      // Fallback if timezone not supported
      if (dateEl) dateEl.textContent = now.toLocaleDateString();
      if (timeEl) timeEl.textContent = now.toLocaleTimeString();
    }
  }
  updateWallStreetClock();
  setInterval(updateWallStreetClock, 1000);

  // 4. Mobile Menu Drawer
  const html = document.documentElement;
  const menuToggle = document.querySelector('.mobile-menu_toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMobileMenu() {
    html.classList.add('state--menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    if (mobileMenu) mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMobileMenu() {
    html.classList.remove('state--menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (mobileMenu) mobileMenu.setAttribute('aria-hidden', 'true');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      if (html.classList.contains('state--menu-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // 5. Subscription Overlay Modal
  const overlay = document.getElementById('subscription-overlay');
  const overlayMask = document.querySelector('.subscription-overlay_mask');
  const overlayClose = document.querySelector('.subscription-overlay_close');
  const overlayForm = document.querySelector('.subscription-overlay-form');

  function openOverlay(emailValue) {
    if (!overlay) return;
    html.classList.add('state--subscription-overlay-open');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.removeAttribute('inert');
    const emailInput = overlay.querySelector('input[name=email]');
    if (emailInput && emailValue) {
      emailInput.value = emailValue;
    }
  }

  function closeOverlay() {
    if (!overlay) return;
    html.classList.remove('state--subscription-overlay-open');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
  }

  if (overlayClose) {
    overlayClose.addEventListener('click', function (e) {
      e.preventDefault();
      closeOverlay();
    });
  }

  if (overlayMask) {
    overlayMask.addEventListener('click', function (e) {
      e.preventDefault();
      closeOverlay();
    });
  }

  // Attach submit listeners to subscription forms
  document.querySelectorAll('.subscription-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[name=email]');
      const email = emailInput ? emailInput.value : '';
      openOverlay(email);
    });
  });

  // Handle overlay options checkbox styling
  document.querySelectorAll('.subscription-option input[type=checkbox]').forEach(function (cb) {
    cb.addEventListener('change', function () {
      const parent = cb.closest('.subscription-option');
      if (parent) {
        if (cb.checked) {
          parent.classList.add('subscription-option--selected');
        } else {
          parent.classList.remove('subscription-option--selected');
        }
      }
    });
  });

  if (overlayForm) {
    overlayForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successBox = overlay.querySelector('.subscription-overlay_success');
      const submitBtn = overlay.querySelector('button[type=submit]');
      if (submitBtn) submitBtn.disabled = true;
      if (successBox) {
        successBox.textContent = 'Welcome aboard! You have been successfully subscribed.';
        successBox.style.display = 'block';
      }
      setTimeout(function () {
        closeOverlay();
        if (successBox) successBox.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;
        overlayForm.reset();
      }, 2500);
    });
  }

  // 6. Global Escape Key Handler
  window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeMobileMenu();
      closeOverlay();
    }
  });

  // 7. Toast Notification & Clipboard helper
  function createToast(message) {
    let toast = document.querySelector('.toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox=0 0 24 24 fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d=M20 6 9 17l-5-5/></svg> <span>' + message + '</span>';
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  window.copytoclipboard = function (url) {
    if (!url) url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        createToast('Link copied to clipboard!');
      }).catch(function () {
        prompt('Copy link:', url);
      });
    } else {
      prompt('Copy link:', url);
    }
    return false;
  };

  window.share = function (url) {
    window.open(url, 'sharer', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=480,width=600');
    return false;
  };

  // 8. Category Filter Buttons
  document.querySelectorAll('.cat-component').forEach(function (button) {
    button.addEventListener('click', function (e) {
      // If internal anchor or filter
      const href = button.getAttribute('href');
      if (href && (href.startsWith('#') || href.includes('javascript:'))) {
        e.preventDefault();
        document.querySelectorAll('.cat-component').forEach(function (b) {
          b.classList.remove('cat-component--active');
        });
        button.classList.add('cat-component--active');
      }
    });
  });

  // 9. Accordion components
  document.querySelectorAll('.accordion-component_toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = btn.closest('.accordion-component');
      if (parent) {
        parent.classList.toggle('accordion-component--open');
        const isOpen = parent.classList.contains('accordion-component--open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

})();
