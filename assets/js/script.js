(function () {
  'use strict';

  // ========================================
  // Logo Marquee
  // ========================================
  function initMarquee() {
    var track = document.querySelector('.logos-track');
    if (!track) return;

    var list = track.querySelector('.logos-list');
    if (!list) return;

    // Clone the list to create seamless loop
    var clone = list.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.style.animationPlayState = 'paused';
    }
  }

  // ========================================
  // Filter Dropdowns (reusable)
  // — locks min-width so toggle doesn't jump
  // — wires up active state + label update
  // ========================================
  function initFilterDropdowns() {
    document.querySelectorAll('.filter-dropdown').forEach(function (dropdown) {
      var btn = dropdown.querySelector('.dropdown-toggle');
      var label = btn ? btn.querySelector('span') : null;
      if (!btn || !label) return;

      // Lock min-width by measuring every option
      var originalText = label.textContent;
      var maxWidth = btn.offsetWidth;

      dropdown.querySelectorAll('.dropdown-item').forEach(function (item) {
        label.textContent = item.textContent;
        var w = btn.offsetWidth;
        if (w > maxWidth) maxWidth = w;
      });

      label.textContent = originalText;
      btn.style.minWidth = maxWidth + 'px';

      // Active state + label update on click
      dropdown.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();

          dropdown.querySelectorAll('.dropdown-item').forEach(function (el) {
            el.classList.remove('active');
          });
          this.classList.add('active');

          label.textContent = this.textContent;
        });
      });
    });
  }

  // ========================================
  // News Filters (page-specific)
  // — only runs when .news section exists
  // — filters .news-card-col by data attrs
  // ========================================
  function initNewsFilters() {
    if (!document.querySelector('.news')) return;

    var cards = document.querySelectorAll('.news-card-col');
    if (!cards.length) return;

    var activeFilters = {};
    var paginationInfo = document.querySelector('.pagination-nav-info');
    var grid = document.querySelector('.news-grid');
    var emptyMsg = null;

    // Create empty state message
    if (grid) {
      emptyMsg = document.createElement('div');
      emptyMsg.className = 'news-empty';
      emptyMsg.textContent = 'No articles found matching your filters.';
      emptyMsg.style.display = 'none';
      grid.appendChild(emptyMsg);
    }

    function applyFilters() {
      var visible = 0;
      var total = cards.length;

      cards.forEach(function (col) {
        var match = Object.keys(activeFilters).every(function (key) {
          return !activeFilters[key] || col.getAttribute('data-' + key) === activeFilters[key];
        });

        col.style.display = match ? '' : 'none';
        if (match) visible++;
      });

      if (paginationInfo) {
        paginationInfo.textContent = 'Showing ' + visible + ' of ' + total + ' articles';
      }

      if (emptyMsg) {
        emptyMsg.style.display = visible === 0 ? '' : 'none';
      }
    }

    document.querySelectorAll('.filter-dropdown[data-filter]').forEach(function (dropdown) {
      var filterKey = dropdown.getAttribute('data-filter');
      activeFilters[filterKey] = '';

      dropdown.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
          activeFilters[filterKey] = this.getAttribute('data-value');
          applyFilters();
        });
      });
    });
  }

  // ========================================
  // Navbar Dropdown Sub-menus
  // ========================================
  function initNavDropdowns() {
    var lgBreakpoint = 992;

    // Mobile: first tap opens dropdown, second tap navigates
    document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth >= lgBreakpoint) return; // desktop — always navigate

        var menu = this.nextElementSibling;
        if (!menu || menu.classList.contains('show')) return; // already open — navigate

        e.preventDefault();
        // Close other open dropdowns
        document.querySelectorAll('.nav-item.dropdown > .dropdown-menu.show').forEach(function (el) {
          el.classList.remove('show');
        });
        menu.classList.add('show');
      });
    });

    // Nested sub-menus
    document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
      var toggle = submenu.querySelector('.dropdown-item');
      if (!toggle) return;

      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var sub = submenu.querySelector('.dropdown-menu');
        if (!sub) return;

        // Close sibling sub-menus
        submenu.parentElement.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function (el) {
          if (el !== sub) el.classList.remove('show');
        });

        sub.classList.toggle('show');
      });
    });
  }

  // ========================================
  // Navbar Overlay Close
  // ========================================
  function initNavbarOverlay() {
    var overlay = document.querySelector('.navbar-overlay');
    if (!overlay) return;

    overlay.addEventListener('click', function () {
      var toggler = document.querySelector('.navbar-toggler');
      if (toggler && !toggler.classList.contains('collapsed')) {
        toggler.click();
      }
    });
  }

  // ========================================
  // Products — accordion toggle
  // ========================================
  function initProducts() {
    if (!document.querySelector('.products-list')) return;

    document.querySelectorAll('.products-item-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var item = this.closest('.products-item');
        item.classList.toggle('open');
      });
    });
  }

  // ========================================
  // Timeline scroll fill
  // ========================================
  function initTimeline() {
    var timeline = document.querySelector('.timeline');
    if (!timeline) return;

    var fill = timeline.querySelector('.timeline-fill');
    if (!fill) return;

    var track = timeline.querySelector('.timeline-track');
    if (!track) return;

    function update() {
      var rect = timeline.getBoundingClientRect();
      var trackH = track.offsetHeight;
      // trigger point: middle of viewport
      var trigger = window.innerHeight * 0.5;
      // how far the trigger has traveled into the timeline
      var scrolled = trigger - rect.top;
      var h = Math.max(0, Math.min(scrolled, trackH));
      fill.style.height = h + 'px';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  // ========================================
  // Init
  // ========================================
  function init() {
    initMarquee();
    initFilterDropdowns();
    initNewsFilters();
    initNavDropdowns();
    initNavbarOverlay();
    initProducts();
    initTimeline();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
