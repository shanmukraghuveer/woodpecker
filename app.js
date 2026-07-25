/**
 * AETHELGARD - Artisan Woodworking & Fine Art Gallery
 * Modular Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- ARTWORK DATABASE (10 Unique Authentic Masterworks & Handicrafts) ---
  const ARTWORKS = [
    {
      id: 'work-vintage-balcony-relief',
      title: '3D Vintage Brick Facade & Balcony Relief Box',
      category: 'Wall Reliefs',
      categorySlug: 'reliefs',
      wood: 'Hand-Carved Timber Frame, Textured Brick Facade & Ornamental Balcony',
      dimensions: '60 cm × 45 cm × 12 cm (24" × 18" × 5")',
      finish: 'Antiqued Terracotta Wash, Sky Blue Window & Gold Foil Railing Accent',
      timeTaken: '95 Hours Precision Relief Carving',
      year: '2026',
      image: 'assets/work_vintage_balcony_relief.jpg',
      story: 'A captivating 3D architectural wall relief display box depicting a vintage brick wall facade, hand-carved window frame with sky blue shutters, and an ornate golden balcony railing set inside a solid dark blue wooden frame.',
      materials: ['Solid Timber Frame', 'Hand-Carved Brick Facade', 'Gold Foil Accent Railing', 'Antiqued Wash'],
      featured: true
    },
    {
      id: 'work-grand-galleon',
      title: 'Grand Flagship Wooden Galleon Model',
      category: 'Decor',
      categorySlug: 'decor',
      wood: 'Handcrafted Solid Teak, Triple Masts & Rigging',
      dimensions: '140 cm × 45 cm × 120 cm (55" × 18" × 47")',
      finish: 'Natural Botanical Wood Oil & Hand-Polished Wax',
      timeTaken: '180 Hours Precision Craftsmanship',
      year: '2025',
      image: 'assets/work_grand_galleon.jpg',
      story: 'A majestic large-scale flagship wooden galleon ship model with multi-tier decks, hand-carved bowsprit, triple tall masts, intricate standing rigging ropes, and custom display stand. Designed as a focal centerpiece for grand foyers or corporate lounges.',
      materials: ['Solid Teak Wood', 'Triple Masts', 'Rigging Cordage', 'Botanical Oil Wax'],
      featured: true
    },
    {
      id: 'work-royal-galleon-ship',
      title: 'Royal Maritime Wooden Galleon Ship Model',
      category: 'Decor',
      categorySlug: 'decor',
      wood: 'Handcrafted Solid Teak, Intricate Canvas Sails & Rigging',
      dimensions: '150 cm × 50 cm × 130 cm (59" × 20" × 51")',
      finish: 'Polished Amber Oil & Natural Wax Finish',
      timeTaken: '210 Hours Artisan Handcrafting',
      year: '2026',
      image: 'assets/work_galleon_marble_display.jpg',
      story: 'A spectacular hand-carved wooden flagship galleon model featuring layered deck structures, carved figurehead bow, full canvas sails, intricate standing rigging, and ornate hull detailing displayed on an exhibition pedestal.',
      materials: ['Solid Teak Wood', 'Woven Canvas Sails', 'Fine Rigging Cordage', 'Polished Amber Oil'],
      featured: true
    },
    {
      id: 'work-ocean-diorama',
      title: '3D Ocean Wave Diorama with Galleon Ship',
      category: 'Modern Art',
      categorySlug: 'modern',
      wood: 'Carved Wooden Box Frame, Timber Hull & Textured Ocean Base',
      dimensions: '65 cm × 40 cm × 35 cm (25.5" × 16" × 14")',
      finish: 'Hand-Painted Sea Foam Resin & Satin Timber Varnish',
      timeTaken: '110 Hours Carving & Sculpting',
      year: '2025',
      image: 'assets/work_ocean_diorama.jpg',
      story: 'A unique 3D maritime artwork displaying a handcrafted wooden exploration ship cresting over textured ocean waves inside a custom mahogany box frame.',
      materials: ['Hand-Carved Timber Ship', 'Textured Sea Foam Diorama', 'Mahogany Box Frame'],
      featured: true
    },
    {
      id: 'work-timber-cottage',
      title: 'Artisan Timber Cottage Architectural Scale Model',
      category: 'Traditional Crafts',
      categorySlug: 'traditional',
      wood: 'Solid Teak, White Trim Accents & Chimney Stack',
      dimensions: '45 cm × 35 cm × 55 cm (18" × 14" × 22")',
      finish: 'Warm Amber Stain & Hand-Painted Architectural Trim',
      timeTaken: '130 Hours Micro Precision Joinery',
      year: '2025',
      image: 'assets/work_timber_cottage.jpg',
      story: 'A detailed multi-level wooden architectural model of a classic country cottage featuring balcony railings, exterior staircase, multi-pane windows, blue front door, and chimney stack on a solid wood display base.',
      materials: ['Seasoned Teak Wood', 'Hand-Fitted Balconies', 'Custom Paint Accents', 'Display Base'],
      featured: true
    },
    {
      id: 'work-rustic-cabin',
      title: 'Rustic Country Log Cabin Scale Model',
      category: 'Traditional Crafts',
      categorySlug: 'traditional',
      wood: 'Aged Weathered Timber Logs, Shake Shingles & Utility Wire',
      dimensions: '40 cm × 30 cm × 35 cm (16" × 12" × 14")',
      finish: 'Natural Weathered Patina & Antique Wash',
      timeTaken: '70 Hours Carving',
      year: '2024',
      image: 'assets/work_rustic_cabin.jpg',
      story: 'A miniature hand-carved rustic country cabin featuring weathered log walls, porch posts, tin roofing, and vintage telegraph/utility pole detail.',
      materials: ['Weathered Timber Logs', 'Shake Shingles', 'Telegraph Pole Wire'],
      featured: true
    },
    {
      id: 'work-canvas-canoe',
      title: 'Handcrafted Wooden Canoe with Canvas Sail',
      category: 'Wood Sculptures',
      categorySlug: 'sculptures',
      wood: 'Carved Hardwood Ribs, Thwarts & Woven Canvas Sail',
      dimensions: '65 cm × 20 cm × 50 cm (25.5" × 8" × 20")',
      finish: 'Deep Linseed Oil & Hand-Tied Rigging Lines',
      timeTaken: '60 Hours Handcrafting',
      year: '2024',
      image: 'assets/work_canvas_canoe.jpg',
      story: 'A classic hand-carved wooden canoe model with open ribbing structure, mast, and canvas sail.',
      materials: ['Carved Hardwood Ribs', 'Woven Canvas Sail', 'Hand-Tied Cordage'],
      featured: true
    },
    {
      id: 'work-junk-shelf',
      title: 'Eastern Junk Sailboat Shelf Display Model',
      category: 'Decor',
      categorySlug: 'decor',
      wood: 'Seasoned Teak, Bamboo Battens & Canvas Sails',
      dimensions: '70 cm × 25 cm × 55 cm (27.5" × 10" × 22")',
      finish: 'Natural Wax Polish & Hand-Bound Bamboo Battens',
      timeTaken: '85 Hours Handcrafting',
      year: '2024',
      image: 'assets/work_junk_shelf.jpg',
      story: 'A traditional Eastern Junk sailboat scale model featured in a display niche, complete with triple batten sails, deck railings, and anchor details.',
      materials: ['Teak Wood Hull', 'Bamboo Battens', 'Canvas Sails', 'Natural Wax'],
      featured: true
    },
    {
      id: 'work-locomotive',
      title: 'Indian Railway 14566 Steam Locomotive 3D Relief',
      category: 'Wall Art',
      categorySlug: 'wall-art',
      wood: 'Hand-Carved Teak Wood & Custom Hardwood Frame',
      dimensions: '90 cm × 45 cm × 12 cm (35" × 18" × 5")',
      finish: 'Polished Enamel Accent Colors & Natural Hardwax',
      timeTaken: '120 Hours Hand Carving & Assembly',
      year: '2025',
      image: 'assets/work_locomotive.jpg',
      story: 'A monumental 3D hand-carved wooden relief capturing the iconic Indian Railway steam locomotive "RK 14566" in full motion. Features hand-sculpted wheels, boiler piston rods, tracks, and atmospheric smoke relief backdrop.',
      materials: ['Seasoned Teak Wood', 'Polished Enamel Accents', 'Hand-Carved Timber Frame', 'Natural Oil Wax'],
      featured: true
    },
    {
      id: 'work-travel-desk',
      title: 'Vintage Classic Car "Travel Desk" Relief Sign',
      category: 'Wall Art',
      categorySlug: 'wall-art',
      wood: 'Solid Carved Hardwood & Rich Mahogany Stain',
      dimensions: '60 cm × 60 cm × 8 cm (24" × 24" × 3")',
      finish: 'Hand-Rubbed Satin Oil & Carved 3D Lettering',
      timeTaken: '75 Hours Hand Carving',
      year: '2025',
      image: 'assets/work_travel_desk_car.jpg',
      story: 'A bespoke hand-carved wooden wall relief sign featuring a classic vintage automobile front grill, headlights, and dual racing stripes above custom carved "TRAVEL DESK" lettering. Designed for bespoke office, travel agency, or home lounge placement.',
      materials: ['Solid Carved Hardwood', 'Mahogany Stain', 'Natural Botanical Oil'],
      featured: true
    },
    {
      id: 'work-stave-church',
      title: 'Heritage Stave Church Architectural Model',
      category: 'Traditional Crafts',
      categorySlug: 'traditional',
      wood: 'Seasoned Teak & Cedar Micro-Shingles',
      dimensions: '45 cm × 38 cm × 65 cm (18" × 15" × 25.5")',
      finish: 'Deep Amber Stain & Hand-Rubbed Varnish',
      timeTaken: '140 Hours Precision Crafting',
      year: '2024',
      image: 'assets/work_stave_church.jpg',
      story: 'An intricate multi-tiered wooden architectural model of a medieval Stave Church featuring layered gabled roofs, spire cross, micro wall planks, and cobblestone courtyard base.',
      materials: ['Seasoned Teak Wood', 'Micro Cedar Shingles', 'Cobblestone Base', 'Botanical Varnish'],
      featured: true
    },
    {
      id: 'work-miniature-violin',
      title: 'Handcrafted Miniature Double Bass / Cello Model',
      category: 'Wood Sculptures',
      categorySlug: 'sculptures',
      wood: 'Fine Grain Spruce, Maple & Ebony Neck',
      dimensions: '35 cm × 12 cm × 6 cm (14" × 4.7" × 2.4")',
      finish: 'Satin Violin Varnish & Hand-Strung Strings',
      timeTaken: '50 Hours Micro Carving',
      year: '2025',
      image: 'assets/work_miniature_violin.jpg',
      story: 'A delicate handcrafted wooden miniature double bass / cello model complete with bow, bridge, f-holes, fingerboard, and micro stringing.',
      materials: ['Carved Spruce & Maple', 'Ebony Fingerboard', 'Violin Varnish', 'Micro Strings'],
      featured: true
    }
  ];

  // --- INITIALIZE UI STATE & CONTROLLERS ---
  initNavbar();
  initTheme();
  initGallery();
  initLightbox();
  initTestimonials();
  initScrollAnimations();
  initCommissionForm();
  initScrollProgress();
  initLocationAndContactServices();
  initWhatsAppServices();
  initWoodpeckerCursorTrailer();
  initAmbientEmbers();
  initButtonRipples();
  initHeroMasterworksVideoEngine();

  // --- NAVBAR CONTROLLER ---
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active Section Link Highlight
      let currentSection = '';
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i') || mobileToggle;
        icon.classList.toggle('fa-xmark');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // --- THEME CONTROLLER ---
  function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    const currentTheme = localStorage.getItem('aethelgard_theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('aethelgard_theme', theme);
        updateThemeIcon(theme);
      });
    }

    function updateThemeIcon(theme) {
      if (!themeBtn) return;
      themeBtn.innerHTML = theme === 'dark'
        ? `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  // --- GALLERY CONTROLLER (With View More Works Pagination) ---
  function initGallery() {
    const masonryGrid = document.getElementById('masonry-grid');
    const viewMoreWrap = document.getElementById('view-more-wrap');
    const viewMoreBtn = document.getElementById('view-more-btn');

    const PAGE_SIZE = 6;
    let visibleCount = PAGE_SIZE;

    filterAndRender();

    if (viewMoreBtn) {
      viewMoreBtn.addEventListener('click', () => {
        visibleCount += PAGE_SIZE;
        filterAndRender();
      });
    }

    function filterAndRender() {
      const slicedList = ARTWORKS.slice(0, visibleCount);
      renderArtworks(slicedList);

      // Handle View More Button state
      if (viewMoreWrap && viewMoreBtn) {
        if (visibleCount >= ARTWORKS.length) {
          viewMoreWrap.style.display = 'none';
        } else {
          viewMoreWrap.style.display = 'block';
          const remaining = ARTWORKS.length - visibleCount;
          viewMoreBtn.querySelector('span').textContent = `View More Works (${remaining} Remaining)`;
        }
      }
    }

    function renderArtworks(list, totalMatching) {
      if (!masonryGrid) return;
      if (list.length === 0) {
        masonryGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
            <p style="font-size: 1.2rem; font-family: var(--font-serif);">No masterworks found matching your search criteria.</p>
            <button class="btn btn-secondary" style="margin-top: 20px;" onclick="document.getElementById('artwork-search').value=''; document.querySelector('.filter-chip[data-filter=\'all\']').click();">Reset Filters</button>
          </div>
        `;
        return;
      }

      masonryGrid.innerHTML = list.map(art => `
        <article class="artwork-card" data-id="${art.id}">
          <div class="artwork-thumb-wrap">
            <img src="${art.image}" alt="${art.title} - ${art.wood} Wood Art" loading="lazy">
            <div class="artwork-overlay">
              <div>
                <span style="display:inline-block; padding: 4px 12px; background: var(--accent-gold); color:#0b0908; font-size:0.7rem; font-weight:700; text-transform:uppercase; border-radius: 4px; margin-bottom: 8px;">Explore Specs</span>
                <h4 style="color:#fff; font-size:1.1rem;">Click for Detail View</h4>
              </div>
            </div>
          </div>
          <div class="artwork-info">
            <div class="artwork-category">${art.category}</div>
            <h3 class="artwork-title">${art.title}</h3>
            <div class="artwork-meta">
              <span>${art.wood}</span>
              <span>${art.year}</span>
            </div>
          </div>
        </article>
      `).join('');

      // Add click listeners for Lightbox
      document.querySelectorAll('.artwork-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          openLightbox(id);
        });
      });
    }
  }

  // --- LIGHTBOX & ARTWORK DETAIL MODAL ---
  function openLightbox(artworkId) {
    const artwork = ARTWORKS.find(a => a.id === artworkId);
    if (!artwork) return;

    const modalOverlay = document.getElementById('lightbox-modal');
    if (!modalOverlay) return;

    modalOverlay.querySelector('.modal-hero-img').src = artwork.image;
    modalOverlay.querySelector('.modal-hero-img').alt = artwork.title;
    modalOverlay.querySelector('.modal-category').textContent = artwork.category;
    modalOverlay.querySelector('.modal-artwork-title').textContent = artwork.title;
    modalOverlay.querySelector('.modal-artwork-story').textContent = artwork.story;
    modalOverlay.querySelector('.spec-wood').textContent = artwork.wood;
    modalOverlay.querySelector('.spec-dim').textContent = artwork.dimensions;
    modalOverlay.querySelector('.spec-finish').textContent = artwork.finish;
    modalOverlay.querySelector('.spec-time').textContent = artwork.timeTaken;

    const materialsList = modalOverlay.querySelector('.materials-list');
    if (materialsList) {
      materialsList.innerHTML = artwork.materials.map(m => `<li>${m}</li>`).join('');
    }

    const modalWaBtn = document.getElementById('modal-whatsapp-btn');
    if (modalWaBtn) {
      const waMsg = encodeURIComponent(`Hello R. Ashok Kumar! I am interested in your artwork: "${artwork.title}" (${artwork.category}, ${artwork.wood}). Could you please share craft consultation details?`);
      modalWaBtn.href = `https://wa.me/919849342401?text=${waMsg}`;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function initLightbox() {
    const modalOverlay = document.getElementById('lightbox-modal');
    const closeBtn = document.querySelector('.modal-close-btn');

    if (!modalOverlay) return;

    closeBtn?.addEventListener('click', closeLightbox);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- BEFORE / AFTER INTERACTIVE COMPARISON SLIDER ---
  function initComparisonSlider() {
    const container = document.querySelector('.image-comparison-slider');
    const beforeImg = document.querySelector('.before-image');
    const handle = document.querySelector('.slider-handle');

    if (!container || !beforeImg || !handle) return;

    let isDragging = false;

    const setSliderPosition = (x) => {
      const rect = container.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      if (pos < 0) pos = 0;
      if (pos > 1) pos = 1;

      const percentage = pos * 100;
      beforeImg.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    });
  }

  // --- CRAFTSMANSHIP PROCESS TIMELINE ---
  function initProcessTimeline() {
    const cards = document.querySelectorAll('.process-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.style.borderColor = 'var(--border-light)');
        card.style.borderColor = 'var(--accent-gold)';
      });
    });
  }

  // --- TESTIMONIALS SLIDER ---
  function initTestimonials() {
    const testimonials = [
      {
        quote: "Antigravity's 'Monolith River Dining Table' is the absolute masterpiece centerpiece of our Swiss villa residence. The wood grain depth is ethereal.",
        name: "Lord Julian Vance",
        role: "Private Art Collector, Geneva",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      },
      {
        quote: "Collaborating with master craftsman Antigravity for our luxury hotel foyer installation was seamless. The woodwork evokes profound emotion.",
        name: "Elena Rostova",
        role: "Principal Architect, Studio Milano",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      },
      {
        quote: "The organic walnut sculpture we commissioned transformed our gallery foyer. Unmatched attention to traditional joinery and oil finishing.",
        name: "Marcus Thorne",
        role: "Director, Modern Heritage Museum",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      }
    ];

    let index = 0;
    const card = document.querySelector('.testimonial-card');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');

    if (!card) return;

    function renderTestimonial(i) {
      const data = testimonials[i];
      card.innerHTML = `
        <div style="color: var(--accent-gold); margin-bottom: 16px; font-size: 1.5rem;">★ ★ ★ ★ ★</div>
        <p class="testimonial-quote">"${data.quote}"</p>
        <div class="testimonial-client">
          <img src="${data.avatar}" alt="${data.name}" class="client-avatar">
          <div class="client-info">
            <h4 class="client-name">${data.name}</h4>
            <span class="client-role">${data.role}</span>
          </div>
        </div>
      `;
    }

    renderTestimonial(0);

    nextBtn?.addEventListener('click', () => {
      index = (index + 1) % testimonials.length;
      renderTestimonial(index);
    });

    prevBtn?.addEventListener('click', () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(index);
    });
  }

  // --- SCROLL ANIMATIONS & COUNTER ---
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');

          // Animate statistics counter numbers if present
          if (entry.target.classList.contains('stat-item')) {
            const numEl = entry.target.querySelector('.stat-num');
            if (numEl && !numEl.dataset.counted) {
              numEl.dataset.counted = 'true';
              const target = parseInt(numEl.dataset.count, 10);
              let start = 0;
              const duration = 2000;
              const step = Math.ceil(target / (duration / 16));
              const timer = setInterval(() => {
                start += step;
                if (start >= target) {
                  numEl.textContent = `${target}+`;
                  clearInterval(timer);
                } else {
                  numEl.textContent = `${start}+`;
                }
              }, 16);
            }
          }
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.stat-item, .artwork-card, .process-card, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }

  // --- COMMISSION FORM ---
  function initCommissionForm() {
    const form = document.getElementById('commission-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.innerHTML;

      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg> Transmitting Commission Request...`;

      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align:center; padding: 40px 20px;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 2px solid var(--accent-gold); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 1.8rem;">✓</div>
            <h3 style="font-size: 1.8rem; font-family: var(--font-serif); margin-bottom: 12px;">Commission Request Received</h3>
            <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 24px;">Thank you for your interest in a bespoke timber masterpiece. Master artisan Antigravity will personally review your specifications and reply within 24–48 hours.</p>
            <button class="btn btn-secondary" onclick="location.reload();">Submit Another Inquiry</button>
          </div>
        `;
      }, 1500);
    });
  }

  // --- SCROLL PROGRESS & BACK TO TOP ---
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.querySelector('.back-to-top-btn');

    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const progress = (scrollPos / totalScroll) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;

      if (backToTopBtn) {
        if (scrollPos > 600) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    });

    backToTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- LOCATION & CONTACT SERVICES ---
  function initLocationAndContactServices() {
    // Location and Atelier contact service initializers
  }

  // --- DIRECT WHATSAPP COMMISSION FORM SERVICE ---
  initCommissionForm();

  function initCommissionForm() {
    const form = document.getElementById('commission-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('comm-name').value.trim() || 'Valued Patron';
      const email = document.getElementById('comm-email') ? document.getElementById('comm-email').value.trim() : '';
      const phone = document.getElementById('comm-phone').value.trim() || 'N/A';
      const type = document.getElementById('comm-type').value || 'Bespoke Woodcraft Idea';
      const channel = document.getElementById('comm-channel') ? document.getElementById('comm-channel').value : 'WhatsApp Direct Consultation';
      const message = document.getElementById('comm-message').value.trim() || 'I am interested in enquiring about a custom woodcraft piece.';

      let formattedMsg = `*WOODPECKERS ORDER & CRAFT ENQUIRY*\n` +
        `👤 *Name:* ${name}\n`;
      
      if (email) {
        formattedMsg += `✉️ *Email:* ${email}\n`;
      }
      
      formattedMsg += `📞 *Phone:* ${phone}\n` +
        `🎨 *Craft Category:* ${type}\n` +
        `💬 *Preferred Contact:* ${channel}\n\n` +
        `📝 *Craft Idea & Specs:*\n${message}`;

      const displayPhoneElem = document.getElementById('display-phone');
      const targetPhone = displayPhoneElem ? displayPhoneElem.textContent.replace(/[^0-9]/g, '') : '919849342401';
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMsg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // --- INTENTIONAL DESIGN & PLACEMENT PANEL CONTROLLER ---
  initIntentionalDesignPanel();

  function initIntentionalDesignPanel() {
    const placementSelect = document.getElementById('space-placement');
    const themeSelect = document.getElementById('design-theme');
    const dimInput = document.getElementById('space-dimensions');
    const titleEl = document.getElementById('intent-summary-title');
    const descEl = document.getElementById('intent-summary-desc');
    const waIntentBtn = document.getElementById('send-intent-wa-btn');

    if (!placementSelect || !themeSelect) return;

    function updateSummary() {
      const placement = placementSelect.value;
      const theme = themeSelect.value;
      const dims = dimInput ? dimInput.value.trim() : 'Standard Space';

      if (titleEl) {
        titleEl.textContent = `Custom ${theme.split('(')[0]} Craft`;
      }
      if (descEl) {
        descEl.innerHTML = `Your custom piece will be designed specifically for your <strong>${placement}</strong> with a <strong>${theme}</strong> theme, proportioned to fit <strong>${dims}</strong>.`;
      }
    }

    placementSelect.addEventListener('change', updateSummary);
    themeSelect.addEventListener('change', updateSummary);
    if (dimInput) dimInput.addEventListener('input', updateSummary);

    if (waIntentBtn) {
      waIntentBtn.addEventListener('click', () => {
        const placement = placementSelect.value;
        const theme = themeSelect.value;
        const dims = dimInput ? dimInput.value.trim() : 'Standard Dimensions';

        const msg = `*WOODPECKERS PLACEMENT & DESIGN CONSULTATION*\n` +
          `📍 *Target Placement Space:* ${placement}\n` +
          `🎨 *Design Theme / Subject:* ${theme}\n` +
          `📏 *Space Dimensions:* ${dims}\n` +
          `💬 *Note:* I would like to consult on the spatial layout and design drawings for my item.`;

        const targetPhone = document.getElementById('display-phone').textContent.replace(/[^0-9]/g, '') || '919849342401';
        const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
      });
    }
  }

  // --- FLYING WOODPECKER CURSOR TRAILER & TIMBER PARTICLE TRAIL ---
  function initWoodpeckerCursorTrailer() {
    const trailer = document.getElementById('woodpecker-cursor-trailer');
    if (!trailer || window.matchMedia('(hover: none)').matches) return;

    let mouseX = -100, mouseY = -100;
    let currentX = -100, currentY = -100;
    let prevMouseX = 0;
    let scaleX = 1;
    let lastParticleTime = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (e.clientX < prevMouseX - 2) {
        scaleX = -1; // Facing Left
      } else if (e.clientX > prevMouseX + 2) {
        scaleX = 1; // Facing Right
      }
      prevMouseX = e.clientX;

      // Spawn floating woodchip particles periodically when mouse moves
      const now = Date.now();
      if (now - lastParticleTime > 120) {
        spawnWoodchip(e.clientX, e.clientY);
        lastParticleTime = now;
      }
    });

    function animateTrailer() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      const offsetOffsetX = scaleX === -1 ? 15 : -35;
      const offsetOffsetY = -30;

      trailer.style.transform = `translate3d(${currentX + offsetOffsetX}px, ${currentY + offsetOffsetY}px, 0) scaleX(${scaleX})`;
      requestAnimationFrame(animateTrailer);
    }
    requestAnimationFrame(animateTrailer);

    function spawnWoodchip(x, y) {
      const chip = document.createElement('div');
      chip.className = 'woodchip-particle';
      chip.style.left = `${x}px`;
      chip.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 30;
      const dy = Math.random() * 25 + 10;
      chip.style.setProperty('--dx', `${dx}px`);
      chip.style.setProperty('--dy', `${dy}px`);

      document.body.appendChild(chip);
      setTimeout(() => chip.remove(), 600);
    }
  }

  // --- AMBIENT FLOATING GOLD EMBER PARTICLES ---
  function initAmbientEmbers() {
    const container = document.createElement('div');
    container.id = 'ambient-embers-wrap';
    document.body.appendChild(container);

    for (let i = 0; i < 20; i++) {
      createEmber(container);
    }
  }

  function createEmber(container) {
    const ember = document.createElement('div');
    ember.className = 'ambient-ember';

    const size = Math.random() * 4 + 2;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.left = `${Math.random() * 100}vw`;
    ember.style.top = `${Math.random() * 100}vh`;
    ember.style.animationDuration = `${Math.random() * 12 + 10}s`;
    ember.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(ember);
  }

  // --- INTERACTIVE BUTTON RIPPLE EFFECT ---
  function initButtonRipples() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // --- CANVAS 2D CINEMATIC MASTERWORKS VIDEO ENGINE ---
  function initHeroMasterworksVideoEngine() {
    const video = document.getElementById('hero-bg-video');
    const canvas = document.getElementById('hero-slideshow-canvas');
    if (!canvas) return;

    if (video) {
      video.addEventListener('playing', () => {
        canvas.style.display = 'none';
      });
      video.addEventListener('error', () => {
        canvas.style.display = 'block';
      });
    }

    const ctx = canvas.getContext('2d');

    const imagePaths = [
      'assets/work_vintage_balcony_relief.jpg',
      'assets/about_artisan_work.jpg',
      'assets/work_grand_galleon.jpg',
      'assets/work_galleon_marble_display.jpg',
      'assets/work_ocean_diorama.jpg',
      'assets/work_locomotive.jpg',
      'assets/work_travel_desk_car.jpg',
      'assets/work_stave_church.jpg',
      'assets/work_timber_cottage.jpg',
      'assets/work_canvas_canoe.jpg',
      'assets/work_junk_shelf.jpg',
      'assets/work_miniature_violin.jpg'
    ];

    const images = [];
    imagePaths.forEach(path => {
      const img = new Image();
      img.src = path;
      images.push(img);
    });

    let currentIndex = 0;
    let nextIndex = 1;
    const SLIDE_DURATION = 240; // ~4 seconds per slide
    const FADE_DURATION = 60;   // ~1 second cross-fade
    let frameCount = 0;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function renderVideoFrame() {
      if (images.length === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frameCount++;
      const cycleStep = frameCount % SLIDE_DURATION;
      const isFading = cycleStep > (SLIDE_DURATION - FADE_DURATION);

      if (cycleStep === 0) {
        currentIndex = (currentIndex + 1) % images.length;
        nextIndex = (currentIndex + 1) % images.length;
      }

      // Draw current image with Ken Burns slow zoom
      const currentImg = images[currentIndex];
      if (currentImg && currentImg.complete && currentImg.naturalWidth !== 0) {
        ctx.save();
        const zoom = 1.0 + ((cycleStep / SLIDE_DURATION) * 0.12);
        drawCoverImage(ctx, currentImg, canvas.width, canvas.height, zoom, 1.0);
        ctx.restore();
      }

      // Draw next image cross-fade overlay if fading
      if (isFading) {
        const nextImg = images[nextIndex];
        if (nextImg && nextImg.complete && nextImg.naturalWidth !== 0) {
          const fadeAlpha = (cycleStep - (SLIDE_DURATION - FADE_DURATION)) / FADE_DURATION;
          ctx.save();
          drawCoverImage(ctx, nextImg, canvas.width, canvas.height, 1.0, fadeAlpha);
          ctx.restore();
        }
      }

      requestAnimationFrame(renderVideoFrame);
    }

    function drawCoverImage(ctx, img, w, h, scale, alpha) {
      ctx.globalAlpha = alpha;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = w / h;
      let drawW, drawH, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawW = w * scale;
        drawH = (w / imgRatio) * scale;
      } else {
        drawH = h * scale;
        drawW = (h * imgRatio) * scale;
      }

      offsetX = (w - drawW) / 2;
      offsetY = (h - drawH) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    }

    requestAnimationFrame(renderVideoFrame);
  }
});

