(function () {

  'use strict';

  /* =========================
     AOS Animation
  ========================== */
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  });


  /* =========================
     Rellax Parallax
  ========================== */
  var rellax = new Rellax('.rellax');


  /* =========================
     Preloader
  ========================== */
  var preloader = function () {

    var loader = document.querySelector('.loader');
    var overlay = document.getElementById('overlayer');

    function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    setTimeout(function () {
      fadeOut(loader);
      fadeOut(overlay);
    }, 200);
  };
  preloader();


  /* =========================
     Tiny Slider
  ========================== */
  var tinyslier = function () {

    var el = document.querySelectorAll('.wide-slider-testimonial');
    if (el.length > 0) {
      tns({
        container: ".wide-slider-testimonial",
        items: 1,
        slideBy: 1,
        axis: "horizontal",
        swipeAngle: false,
        speed: 700,
        nav: true,
        loop: true,
        edgePadding: 40,
        controls: true,
        controlsPosition: "bottom",
        autoHeight: true,
        autoplay: true,
        mouseDrag: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
        controlsContainer: "#prevnext-testimonial",
        responsive: {
          350: { items: 1 },
          500: { items: 2 },
          600: { items: 3 },
          900: { items: 5 }
        }
      });
    }

    var destinationSlider = document.querySelectorAll('.destination-slider');
    if (destinationSlider.length > 0) {
      tns({
        container: ".destination-slider",
        mouseDrag: true,
        items: 1,
        axis: "horizontal",
        swipeAngle: false,
        speed: 700,
        edgePadding: 50,
        nav: true,
        gutter: 30,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#destination-controls",
        responsive: {
          350: { items: 1 },
          500: { items: 2 },
          600: { items: 3 },
          900: { items: 5 }
        }
      });
    }

  };
  tinyslier();


  /* =========================
     GLightbox
  ========================== */
  var lightbox = function () {
    GLightbox({
      selector: '.glightbox3'
    });
  };
  lightbox();


  /* =========================
     Cursor Cat Follow Effect
  ========================== */
  (function () {

    const cat = document.getElementById("cursor-cat");
    if (!cat) return;
    if (window.innerWidth < 768) return; // Disable on mobile

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let catPos = { x: mouse.x, y: mouse.y };

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const speed = 0.12; // Fast and playful

    function animate() {
      const dx = mouse.x - catPos.x;
      const dy = mouse.y - catPos.y;

      catPos.x += dx * speed;
      catPos.y += dy * speed;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      cat.style.transform = `
        translate(${catPos.x}px, ${catPos.y}px)
        rotate(${angle}deg)
      `;

      // Catch animation
      if (Math.hypot(dx, dy) < 6) {
        cat.textContent = "😸";
      } else {
        cat.textContent = "🐱";
      }

      requestAnimationFrame(animate);
    }

    animate();

  })();


})();
