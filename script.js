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
    ".section__head, .featured__head, .work__head, .about__text, .about__photo, " +
    ".feat, .phone, .services__grid li, .process__steps li, .package, .contact__inner"
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

  /* ---------- 4. Auto-update footer year ---------- */
  const yearSpan = document.getElementById("year");
  if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }

});
