/* ============================================================
   SHIVANI SUDHIR — UGC PORTFOLIO
   script.js
   ------------------------------------------------------------
   Handles: mobile nav, sticky-nav shadow, scroll reveal,
   smooth-scroll close, and the auto footer year.
   No libraries — vanilla JS, beginner-friendly.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Mobile navigation toggle ---------- */
  const toggle   = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  // Close the menu after tapping a link (mobile)
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.classList.remove("open");
    });
  });

  /* ---------- 2. Add shadow to nav once scrolled ---------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  /* ---------- 3. Scroll reveal animations ---------- */
  // Any element we want to fade-up gets the .reveal class added,
  // then IntersectionObserver toggles .visible when it enters view.
  const revealTargets = document.querySelectorAll(
    ".section__head, .hero__text, .hero__image, .about__image, .about__text, " +
    ".why__card, .work, .service, .process__step, .package, " +
    ".value__item, .cta-band__inner, .contact__inner"
  );

  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: just show everything if the browser is old
    revealTargets.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 4. Portfolio category filter ---------- */
  const filterBar = document.getElementById("filters");
  const workItems = document.querySelectorAll("#portfolioGrid .work");

  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter");
      if (!btn) return;

      // Highlight the active tab
      filterBar.querySelectorAll(".filter").forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      // Show/hide cards by category
      const filter = btn.getAttribute("data-filter");
      workItems.forEach(function (item) {
        const match = filter === "all" || item.getAttribute("data-category") === filter;
        item.classList.toggle("is-hidden", !match);
      });
    });
  }

  /* ---------- 5. Auto-update footer year ---------- */
  const yearSpan = document.getElementById("year");
  if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }

});
