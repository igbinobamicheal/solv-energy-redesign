// MAIN ENTRY POINT
import { router } from './router.js';
import { initModals } from './modals.js';
import { renderHome } from './pages/home.js';
import { renderWhoWeAre } from './pages/whoWeAre.js';
import { renderWhatWeDo } from './pages/whatWeDo.js';
import { renderProjects } from './pages/projects.js';
import { renderImpact } from './pages/impact.js';
import { renderInvestors } from './pages/investors.js';
import { renderCareers } from './pages/careers.js';
import { renderNews } from './pages/news.js';
import { renderContact } from './pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Modals
  initModals();

  // Setup Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-nav-link, .mobile-btn-connect').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Register Routes
  router.addRoute('/', renderHome);
  router.addRoute('who-we-are', renderWhoWeAre);
  router.addRoute('what-we-do', renderWhatWeDo);
  router.addRoute('projects', renderProjects);
  router.addRoute('impact', renderImpact);
  router.addRoute('investors', renderInvestors);
  router.addRoute('careers', renderCareers);
  router.addRoute('news', renderNews);
  router.addRoute('contact', renderContact);
});
