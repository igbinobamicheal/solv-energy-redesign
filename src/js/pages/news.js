// NEWS & INSIGHTS PAGE VIEW RENDERER
import { openDrawer } from '../modals.js';

export function renderNews() {
  setTimeout(() => {
    document.querySelectorAll('[data-news-title]').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-news-title');
        const date = card.getAttribute('data-news-date');
        openDrawer(`
          <div style="font-family: var(--font-heading);">
            <span class="eyebrow">${date}</span>
            <h2 style="font-size: 2rem; color: var(--color-blue-primary); margin-bottom: 1rem;">${title}</h2>
            <hr style="border: 0; border-top: 1px solid #E2E8F0; margin-bottom: 1.5rem;">
            <p style="font-family: var(--font-body); color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
              SOLV Energy continues to set industry benchmarks for rapid EPC delivery and grid interconnect reliability across major U.S. utility markets.
            </p>
            <p style="font-family: var(--font-body); color: var(--color-text-muted); line-height: 1.7;">
              With over 21 GW of installed capacity and 500+ completed projects, our team remains committed to advancing renewable infrastructure at scale.
            </p>
          </div>
        `);
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/intro_solar_project.png" alt="SOLV Energy News" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block">
          <span class="eyebrow eyebrow-lime">NEWS & INSIGHTS</span>
          <h1 class="hero-title">Latest Announcements & <span class="highlight-blue">Updates</span></h1>
          <p class="hero-subtitle">Industry leadership, project milestones, and tech innovations in utility solar and storage.</p>
        </div>
      </div>
    </section>



    <section style="background: #FFF; padding: 6rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
          <div class="service-card" data-news-title="SOLV Energy Completes 300 MWp Eiffel Solar Farm" data-news-date="August 2026" style="cursor: pointer; padding: 1.5rem;">
            <span class="eyebrow" style="margin-bottom: 0.25rem;">AUGUST 2026</span>
            <h3 style="font-size: 1.4rem; color: var(--color-navy-deep); margin-bottom: 0.5rem;">SOLV Energy Completes 300 MWp Eiffel Solar Farm</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Energization milestone reached on schedule in Paris, Texas.</p>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">Read Press Release &rarr;</span>
          </div>

          <div class="service-card" data-news-title="Expanding Utility Battery Storage Fleet Beyond 5 GWh" data-news-date="July 2026" style="cursor: pointer; padding: 1.5rem;">
            <span class="eyebrow" style="margin-bottom: 0.25rem;">JULY 2026</span>
            <h3 style="font-size: 1.4rem; color: var(--color-navy-deep); margin-bottom: 0.5rem;">Expanding Utility Battery Storage Fleet Beyond 5 GWh</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Strategic BESS EPC partnerships accelerating grid stability.</p>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">Read Press Release &rarr;</span>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
      </div>
    </footer>
  `;
}
