/* ==========================================================================
   明媚 | 个人主页 交互脚本
   功能：明暗主题切换、移动端菜单、滚动入场动画、页脚年份
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 1. 明暗主题切换 ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      // 亮色显示月亮（点击切到暗色），暗色显示太阳
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // 读取本地偏好，否则跟随系统
  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (e) {
    /* localStorage 不可用时忽略 */
  }

  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        /* 忽略 */
      }
    });
  }

  /* ---------- 2. 移动端菜单 ---------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // 点击菜单里的链接后自动收起
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('.nav-link')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 3. 滚动入场动画 ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // 不支持 IntersectionObserver 时直接显示
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- 4. 页脚年份自动更新 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
