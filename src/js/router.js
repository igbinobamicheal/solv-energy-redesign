// ROUTER SYSTEM WITH BRANDED PAGE TRANSITIONS
import { initScrollAnimations, initCounters } from './animations.js';

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.overlay = document.getElementById('page-transition-overlay');
    this.app = document.getElementById('app');

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  addRoute(path, renderFunction) {
    this.routes[path] = renderFunction;
  }

  async handleRoute() {
    let hash = window.location.hash.replace('#', '') || '/';
    if (!this.routes[hash]) {
      hash = '/';
    }

    if (this.currentRoute === hash) return;

    // Trigger Branded Transition Overlay
    await this.triggerTransitionOut();

    // Render New Page View
    this.currentRoute = hash;
    const renderFn = this.routes[hash];
    if (renderFn) {
      this.app.innerHTML = await renderFn();
      window.scrollTo(0, 0);
      this.updateActiveNavLinks(hash);
    }

    // Re-initialize animations & interactions for new view
    setTimeout(() => {
      initScrollAnimations();
      initCounters();
      this.triggerTransitionIn();
    }, 150);
  }

  triggerTransitionOut() {
    return new Promise(resolve => {
      if (this.overlay) {
        this.overlay.classList.add('active');
      }
      setTimeout(resolve, 300);
    });
  }

  triggerTransitionIn() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
    }
  }

  updateActiveNavLinks(route) {
    const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === route || (route === '/' && href === '/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

export const router = new Router();
