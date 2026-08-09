// WHO WE ARE PAGE VIEW RENDERER
import { openDrawer } from '../modals.js';

export function renderWhoWeAre() {
  setTimeout(() => {
    document.querySelectorAll('[data-leader-id]').forEach(card => {
      card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const title = card.getAttribute('data-title');
        const bio = card.getAttribute('data-bio');
        openDrawer(`
          <div style="font-family: var(--font-heading);">
            <span class="eyebrow">LEADERSHIP PROFILE</span>
            <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--color-blue-primary);">${name}</h2>
            <div style="font-size: 1.1rem; font-weight: 600; color: var(--color-lime-dark); margin-bottom: 1.5rem;">${title}</div>
            <hr style="border: 0; border-top: 1px solid #E2E8F0; margin-bottom: 1.5rem;">
            <p style="font-family: var(--font-body); font-size: 1.05rem; line-height: 1.7; color: var(--color-text-muted);">${bio}</p>
            <div style="margin-top: 2rem;">
              <a href="https://linkedin.com" target="_blank" class="btn btn-blue" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">Connect on LinkedIn &rarr;</a>
            </div>
          </div>
        `);
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/intro_solar_project.png" alt="Who We Are SOLV Energy" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block reveal-on-scroll">
          <span class="eyebrow eyebrow-lime">WHO WE ARE</span>
          <h1 class="hero-title">Powered by Purpose.<br>Driven by <span class="highlight-blue">Execution.</span></h1>
          <p class="hero-subtitle">We are engineers, builders, operators and innovators dedicated to scaling clean energy infrastructure across North America.</p>
        </div>
      </div>

    </section>

    <!-- OUR STORY SECTION -->
    <section style="background: #FFF; padding: 6rem 0 8rem; position: relative;">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text-col reveal-on-scroll">
            <span class="eyebrow">OUR STORY</span>
            <h2>Proven Track Record in Renewable Infrastructure</h2>
            <p>
              Founded on the belief that utility-scale clean energy requires enterprise-grade engineering and relentless field execution, SOLV Energy has grown into America’s premier renewable EPC and O&M provider.
            </p>
            <p>
              With over 21 GW of installed solar and storage capacity, we partner with leading utilities, independent power producers, and infrastructure investors to power communities and drive sustainable growth.
            </p>
          </div>

          <div class="intro-image-card reveal-slide-right">
            <img src="/assets/hero_solar_farm.png" alt="SOLV Energy Operations">
          </div>
        </div>
      </div>

    </section>

    <!-- LEADERSHIP SECTION -->
    <section style="background: var(--color-light-bg); padding: 6rem 0 8rem; position: relative;">
      <div class="container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 4rem;" class="reveal-on-scroll">
          <span class="eyebrow">LEADERSHIP</span>
          <h2 style="font-size: 2.8rem; color: var(--color-navy-deep);">Guided by Industry Pioneers</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <!-- Profile 1 -->
          <div class="service-card" data-leader-id="1" data-name="George Hershman" data-title="Chief Executive Officer" data-bio="George Hershman is CEO of SOLV Energy, leading the company's growth as one of the largest utility-scale solar and storage EPC and O&M providers in the U.S. He brings over 25 years of construction leadership." style="min-height: 280px; cursor: pointer;" data-service-index="0">
            <div class="service-icon-box" style="background: var(--color-blue-primary); color: #FFF; font-weight: 800;">GH</div>
            <h3 style="font-size: 1.4rem; color: var(--color-navy-deep); margin-bottom: 0.3rem;">George Hershman</h3>
            <p style="color: var(--color-blue-primary); font-weight: 600; font-size: 0.95rem; margin-bottom: 1rem;">Chief Executive Officer</p>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">Click to View Profile &rarr;</span>
          </div>

          <!-- Profile 2 -->
          <div class="service-card" data-leader-id="2" data-name="Jennifer Rogers" data-title="Chief Operations Officer" data-bio="Jennifer oversees high-voltage engineering, procurement, supply chain, and field operations across all 50 states with an emphasis on safety and schedule precision." style="min-height: 280px; cursor: pointer;" data-service-index="1">
            <div class="service-icon-box" style="background: var(--color-blue-primary); color: #FFF; font-weight: 800;">JR</div>
            <h3 style="font-size: 1.4rem; color: var(--color-navy-deep); margin-bottom: 0.3rem;">Jennifer Rogers</h3>
            <p style="color: var(--color-blue-primary); font-weight: 600; font-size: 0.95rem; margin-bottom: 1rem;">Chief Operations Officer</p>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">Click to View Profile &rarr;</span>
          </div>

          <!-- Profile 3 -->
          <div class="service-card" data-leader-id="3" data-name="Marcus Vance" data-title="EVP of Services & O&M" data-bio="Marcus directs SOLV Energy's Operations & Maintenance portfolio, overseeing performance monitoring, remote diagnostics, and field technician dispatch across 150+ plants." style="min-height: 280px; cursor: pointer;" data-service-index="2">
            <div class="service-icon-box" style="background: var(--color-blue-primary); color: #FFF; font-weight: 800;">MV</div>
            <h3 style="font-size: 1.4rem; color: var(--color-navy-deep); margin-bottom: 0.3rem;">Marcus Vance</h3>
            <p style="color: var(--color-blue-primary); font-weight: 600; font-size: 0.95rem; margin-bottom: 1rem;">EVP of Services & O&M</p>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">Click to View Profile &rarr;</span>
          </div>
        </div>
      </div>

    </section>

    <!-- CONTEXTUAL CTA BANNER (SPEC SECTION 27) -->
    <section style="background: linear-gradient(180deg, #0054A6 0%, #003B75 100%); color: #FFF; padding: 7rem 0 8rem; text-align: center; position: relative;">
      <div class="container reveal-scale">
        <span class="eyebrow eyebrow-lime">WHAT'S NEXT</span>
        <h2 style="font-size: 2.8rem; margin-bottom: 1.5rem;">Ready to see what we can build?</h2>
        <a href="#/projects" class="btn btn-lime">Explore Our Projects &rarr;</a>
      </div>

    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
      </div>
    </footer>
  `;
}
