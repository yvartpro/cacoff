//JS pour offcanvas menu
document.body.addEventListener('htmx:afterSwap', function () {
      const menuBtn = document.getElementById('menu-btn');
      const closeBtn = document.getElementById('close-menu');
      const mobileMenu = document.getElementById('mobile-menu');

      if (!menuBtn || !closeBtn || !mobileMenu) return;

      menuBtn.onclick = () => mobileMenu.classList.remove('hidden');
      closeBtn.onclick = () => mobileMenu.classList.add('hidden');
      mobileMenu.onclick = (e) => {
        if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
      };
    });

    document.body.addEventListener('htmx:afterSwap', () => {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuPanel = document.getElementById('mobile-menu-panel');

        if (!menuBtn || !closeBtn || !mobileMenu || !menuPanel) return;

        menuBtn.onclick = () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            menuPanel.classList.remove('-translate-x-full');
            menuPanel.classList.add('translate-x-0');
        }, 10);
        }; 

        const closeMenu = () => {
        menuPanel.classList.remove('translate-x-0');
        menuPanel.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
        };

        closeBtn.onclick = closeMenu;
        mobileMenu.onclick = (e) => {
        if (e.target === mobileMenu) closeMenu();
        };
    });


    // banner js
      document.body.addEventListener('htmx:afterSwap', () => {
    const slides = document.getElementById('slides');
    const total = 3;
    let current = 0;

    const goToSlide = (index) => {
      slides.style.transform = `translateX(-${index * 100}%)`;
      current = index;

      const currentSlide = slides.children[index];
      const animatedElements = currentSlide.querySelectorAll('.animate-fade-in-up');
      animatedElements.forEach(el => {
        el.classList.remove('animate-fade-in-up');
        void el.offsetWidth;
        setTimeout(() => {
          el.classList.add('animate-fade-in-up');
        }, 20);
      });
    };

    document.getElementById('prevSlide').onclick = () => {
      const nextIndex = (current - 1 + total) % total;
      goToSlide(nextIndex);
    };

    document.getElementById('nextSlide').onclick = () => {
      const nextIndex = (current + 1) % total;
      goToSlide(nextIndex);
    };

    setInterval(() => {
      const nextIndex = (current + 1) % total;
      goToSlide(nextIndex);
    }, 8000);

    goToSlide(0);
  });

document.body.addEventListener('htmx:afterSwap', () => {
  const slides = document.getElementById('slides');
  const total = 3;
  let current = 0;

  const indicators = document.querySelectorAll('#carousel-indicators button');

  const goToSlide = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    current = index;

    indicators.forEach((btn, i) => {
      btn.classList.toggle('bg-white/70', i === index);
      btn.classList.toggle('bg-white/40', i !== index);
    });

    const currentSlide = slides.children[index];
    const animatedElements = currentSlide.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach(el => {
      el.classList.remove('animate-fade-in-up');
      void el.offsetWidth;
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
      }, 20);
    });
  };

  document.getElementById('prevSlide')?.addEventListener('click', () => {
    const nextIndex = (current - 1 + total) % total;
    goToSlide(nextIndex);
  });

  document.getElementById('nextSlide')?.addEventListener('click', () => {
    const nextIndex = (current + 1) % total;
    goToSlide(nextIndex);
  });

  indicators.forEach((btn, i) => {
    btn.onclick = () => goToSlide(i);
  });

  setInterval(() => {
    const nextIndex = (current + 1) % total;
    goToSlide(nextIndex);
  }, 8000);

  goToSlide(0);
});

//AOS initialization

  AOS.init({
    duration: 800,
    once: true 
  });