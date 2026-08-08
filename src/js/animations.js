// REVERSIBLE SCROLL ANIMATIONS & NUMERIC COUNTERS

export function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.removeEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

export function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const targetNum = parseInt(el.getAttribute('data-counter'), 10);
      const suffix = el.getAttribute('data-suffix') || '';

      if (entry.isIntersecting) {
        let duration = 1800;
        let startTime = performance.now();

        function updateCounter(currentTime) {
          let elapsedTime = currentTime - startTime;
          let progress = Math.min(elapsedTime / duration, 1);
          let easeOut = 1 - Math.pow(1 - progress, 3);
          let currentVal = Math.floor(easeOut * targetNum);

          el.textContent = `${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${targetNum}${suffix}`;
          }
        }
        requestAnimationFrame(updateCounter);
      } else {
        // Reset counter when scrolling out of view so it re-animates on scroll back
        el.textContent = `0${suffix}`;
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}

export function initScrollAnimations() {
  initHeaderScroll();

  // Reversible Scroll Reveal Observer (animates in when entering, resets when leaving)
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-slide-right, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      } else {
        // Remove class when out of view to reverse animation on scroll back!
        entry.target.classList.remove('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // Reversible Staggered Service Cards Observer
  const serviceCards = document.querySelectorAll('.service-card[data-service-index]');
  if (serviceCards.length) {
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target;
        const idx = parseInt(card.getAttribute('data-service-index') || '0', 10);

        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('revealed');
          }, idx * 80);
        } else {
          card.classList.remove('revealed');
        }
      });
    }, { threshold: 0.15 });

    serviceCards.forEach(card => serviceObserver.observe(card));
  }

  // Smooth Parallax & Dynamic Wave Scaling on Scroll (Both Directions)
  const heroBg = document.querySelector('.hero-bg-image');
  const waveSvgs = document.querySelectorAll('.section-divider-bottom svg');

  const handleWindowScroll = () => {
    const scrolled = window.scrollY;
    
    if (heroBg && scrolled < window.innerHeight) {
      heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.18}px)`;
    }

    // Dynamic wave scale morphing smoothly when scrolling up & down
    waveSvgs.forEach(svg => {
      const rect = svg.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = Math.sin((rect.top / window.innerHeight) * Math.PI);
        const scaleVal = 1 + Math.abs(progress) * 0.06;
        svg.style.transform = `scaleY(${scaleVal})`;
      }
    });
  };

  window.removeEventListener('scroll', handleWindowScroll);
  window.addEventListener('scroll', handleWindowScroll);
  handleWindowScroll();
}
