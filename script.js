/**
 * วัดสมานประชาชน (Wat Saman Prachachon) - Landing Page Scripts
 * Includes: Sticky Header, Mobile Drawer, Lightbox Modal,
 * Account Copy with Toast, FAQ Accordion, Gallery Filters & Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. HERO AUTO-PLAY SLIDER (ภาพทั้งหมดใน folder "Pic" เลื่อน slide อัตโนมัติ ภาพชัด ไม่มีตัวหนังสือหน้าภาพ)
  const heroSlider = document.getElementById('heroSlider');
  const slides = document.querySelectorAll('.slider-track .slide');
  const sliderDots = document.getElementById('sliderDots');
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 4000; // 4 วินาทีต่อภาพ

  if (slides.length > 0) {
    // สร้าง Dot นำทางอัตโนมัติตามจำนวนรูปภาพ
    if (sliderDots) {
      sliderDots.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `ไปยังภาพที่ ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoSlide();
        });
        sliderDots.appendChild(dot);
      });
    }

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    }

    function resetAutoSlide() {
      startAutoSlide();
    }

    // ปุ่มลูกศร ซ้าย-ขวา
    if (sliderPrev) {
      sliderPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    if (sliderNext) {
      sliderNext.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    // หยุดเมื่อนำเมาส์ไปชี้ และเล่นต่อเมื่อนำเมาส์ออก
    if (heroSlider) {
      heroSlider.addEventListener('mouseenter', stopAutoSlide);
      heroSlider.addEventListener('mouseleave', startAutoSlide);

      // รองรับการปัดหน้าจอบนมือถือ (Touch Swipe)
      let touchStartX = 0;
      let touchEndX = 0;

      heroSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      heroSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 40;
        if (touchEndX < touchStartX - swipeThreshold) {
          nextSlide();
          resetAutoSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
          prevSlide();
          resetAutoSlide();
        }
      }, { passive: true });
    }

    // เริ่มเล่นสไลด์อัตโนมัติ
    startAutoSlide();
  }

  // 0.2 KUTI AUTO-PLAY SLIDER (ภาพทั้งหมดใน folder "Pic สร้างกุฏิเจ้าอาวาส" เลื่อน slide อัตโนมัติ ภาพชัด ไม่มีตัวหนังสือหน้าภาพ)
  const kutiSlider = document.getElementById('kutiSlider');
  const kutiSlides = document.querySelectorAll('.kuti-slider-track .kuti-slide');
  const kutiSliderDots = document.getElementById('kutiSliderDots');
  const kutiSliderPrev = document.getElementById('kutiSliderPrev');
  const kutiSliderNext = document.getElementById('kutiSliderNext');

  let currentKutiSlide = 0;
  let kutiSlideInterval = null;
  const kutiSlideDuration = 3800; // 3.8 วินาทีต่อภาพ

  if (kutiSlides.length > 0) {
    if (kutiSliderDots) {
      kutiSliderDots.innerHTML = '';
      kutiSlides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `ไปยังภาพกุฏิที่ ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToKutiSlide(idx);
          resetKutiAutoSlide();
        });
        kutiSliderDots.appendChild(dot);
      });
    }

    const kutiDots = kutiSliderDots ? kutiSliderDots.querySelectorAll('.slider-dot') : [];

    function goToKutiSlide(index) {
      kutiSlides[currentKutiSlide].classList.remove('active');
      if (kutiDots[currentKutiSlide]) kutiDots[currentKutiSlide].classList.remove('active');

      currentKutiSlide = (index + kutiSlides.length) % kutiSlides.length;

      kutiSlides[currentKutiSlide].classList.add('active');
      if (kutiDots[currentKutiSlide]) kutiDots[currentKutiSlide].classList.add('active');
    }

    function nextKutiSlide() {
      goToKutiSlide(currentKutiSlide + 1);
    }

    function prevKutiSlide() {
      goToKutiSlide(currentKutiSlide - 1);
    }

    function startKutiAutoSlide() {
      stopKutiAutoSlide();
      kutiSlideInterval = setInterval(nextKutiSlide, kutiSlideDuration);
    }

    function stopKutiAutoSlide() {
      if (kutiSlideInterval) {
        clearInterval(kutiSlideInterval);
        kutiSlideInterval = null;
      }
    }

    function resetKutiAutoSlide() {
      startKutiAutoSlide();
    }

    if (kutiSliderPrev) {
      kutiSliderPrev.addEventListener('click', () => {
        prevKutiSlide();
        resetKutiAutoSlide();
      });
    }

    if (kutiSliderNext) {
      kutiSliderNext.addEventListener('click', () => {
        nextKutiSlide();
        resetKutiAutoSlide();
      });
    }

    if (kutiSlider) {
      kutiSlider.addEventListener('mouseenter', stopKutiAutoSlide);
      kutiSlider.addEventListener('mouseleave', startKutiAutoSlide);

      let kutiTouchStartX = 0;
      let kutiTouchEndX = 0;

      kutiSlider.addEventListener('touchstart', (e) => {
        kutiTouchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      kutiSlider.addEventListener('touchend', (e) => {
        kutiTouchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 40;
        if (kutiTouchEndX < kutiTouchStartX - swipeThreshold) {
          nextKutiSlide();
          resetKutiAutoSlide();
        } else if (kutiTouchEndX > kutiTouchStartX + swipeThreshold) {
          prevKutiSlide();
          resetKutiAutoSlide();
        }
      }, { passive: true });
    }

    startKutiAutoSlide();
  }

  // 1. STICKY HEADER & SCROLL TO TOP BUTTON
  const mainHeader = document.getElementById('mainHeader');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }

    updateActiveNavLink();
  });

  // 2. MOBILE DRAWER NAVIGATION
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Submenu toggles in mobile drawer
  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentLi = toggle.closest('li');
      const submenu = parentLi.querySelector('.mobile-submenu');
      const icon = toggle.querySelector('i');

      if (submenu) {
        submenu.classList.toggle('open');
        if (submenu.classList.contains('open')) {
          icon.className = 'fa-solid fa-minus';
        } else {
          icon.className = 'fa-solid fa-plus';
        }
      }
    });
  });

  // Close mobile drawer when clicking anchor links
  const mobileLinks = document.querySelectorAll('.mobile-drawer a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // 3. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 4. GALLERY FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue || item.classList.contains('add-more-card')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 5. SCROLLSPY (Highlight active nav link)
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 6. KEYBOARD ESCAPE TO CLOSE MODAL
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('lightboxModal');
      if (modal && modal.classList.contains('active')) {
        closeLightbox();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });
});

// GLOBAL FUNCTIONS ACCESSIBLE VIA INLINE EVENT HANDLERS

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Copy Bank Account Number to clipboard and show toast
 */
function copyAccountNumber() {
  const accNumberText = '02 048-34900-64';
  const cleanNumber = '020483490064';

  // Use Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(cleanNumber).then(() => {
      showToast('คัดลอกเลขบัญชี 02 048-34900-64 (ธ.ออมสิน) เรียบร้อยแล้ว');
    }).catch(() => {
      fallbackCopyText(cleanNumber);
    });
  } else {
    fallbackCopyText(cleanNumber);
  }
}

/**
 * Fallback copy function for older browsers
 */
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showToast('คัดลอกเลขบัญชี 02 048-34900-64 (ธ.ออมสิน) เรียบร้อยแล้ว');
  } catch (err) {
    showToast('เลขบัญชี: 02 048-34900-64 (ธ.ออมสิน)');
  }
  document.body.removeChild(textArea);
}

/**
 * Show temporary toast message
 */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');

  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

/**
 * Open Image Lightbox Modal
 */
function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');

  if (modal && img) {
    img.src = src;
    if (cap) cap.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close Image Lightbox Modal
 */
function closeLightbox(event) {
  if (!event || event.target.id === 'lightboxModal' || event.target.classList.contains('lightbox-close')) {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

/**
 * Handle Contact Form submission
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');

  const senderName = nameInput ? nameInput.value : 'สาธุชน';
  showToast(`ขอบพระคุณคุณ ${senderName} ทางวัดได้รับข้อมูลแล้ว`);

  if (form) {
    form.reset();
  }
}
