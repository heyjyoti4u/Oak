(function () {
  'use strict';

  document.body.classList.add('has-app-tabbar');

  /* ---------- Highlight the current tab in the bottom bar ---------- */
  var page = (window.location.pathname.split('/').pop() || 'index.html');
  if (page === '') page = 'index.html';

  document.querySelectorAll('.app-tabbar a[data-page]').forEach(function (link) {
    var pages = link.getAttribute('data-page').split(',');
    if (pages.indexOf(page) !== -1) {
      link.classList.add('active');
    }
  });

  /* ---------- Auto-hide the top header on scroll-down, ----------
     ---------- reveal it again on scroll-up (native app feel) --- */
  var nav = document.querySelector('.site-nav');
  if (nav && window.innerWidth < 992) {
    var lastY = window.scrollY;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentY = window.scrollY;

          if (currentY > lastY && currentY > 80) {
            nav.classList.add('oak-nav-hidden');
          } else {
            nav.classList.remove('oak-nav-hidden');
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
