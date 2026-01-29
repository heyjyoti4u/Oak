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
  if (window.innerWidth < 768) return;

  const frameSize = 32;
  let frame = 0;
  let currentState = "run";

  const states = {
    run:  { y: 0, frames: 8 },
    idle: { y: 32, frames: 4 },
    hold: { y: 64, frames: 2 }
  };

  let mouse = { x: innerWidth / 2, y: innerHeight / 2 };
  let pos = { x: mouse.x, y: mouse.y };
  let vel = { x: 0, y: 0 };

  document.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function updateSprite() {
    const state = states[currentState];
    frame = (frame + 1) % state.frames;
    cat.style.backgroundPosition = 
      `-${frame * frameSize}px -${state.y}px`;
  }

  setInterval(updateSprite, 100); // animation speed

  function animate() {
    const dx = mouse.x - pos.x;
    const dy = mouse.y - pos.y;
    const dist = Math.hypot(dx, dy);

    vel.x += dx * 0.04;
    vel.y += dy * 0.04;
    vel.x *= 0.85;
    vel.y *= 0.85;

    pos.x += vel.x;
    pos.y += vel.y;

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    cat.style.transform = `
      translate(${pos.x}px, ${pos.y}px)
      rotate(${angle}deg)
    `;

    // State logic
    if (dist < 10) {
      currentState = "hold";   // pakad liya, haath fold
    } else if (dist < 60) {
      currentState = "idle";   // slow walking
    } else {
      currentState = "run";    // bhag rahi hai
    }

    requestAnimationFrame(animate);
  }

  animate();
})();


})();
