// CAREERS PAGE VIEW RENDERER WITH EXPANDABLE JOB ROLE DRAWER
import { openDrawer } from '../modals.js';

export function renderCareers() {
  setTimeout(() => {
    document.querySelectorAll('[data-job-title]').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-job-title');
        const loc = card.getAttribute('data-job-loc');
        const dept = card.getAttribute('data-job-dept');
        openDrawer(`
          <div style="font-family: var(--font-heading);">
            <span class="eyebrow">${dept}</span>
            <h2 style="font-size: 2rem; color: var(--color-blue-primary); margin-bottom: 0.5rem;">${title}</h2>
            <div style="font-size: 1rem; color: var(--color-navy-deep); font-weight: 600; margin-bottom: 1.5rem;">Location: ${loc}</div>
            <hr style="border: 0; border-top: 1px solid #E2E8F0; margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.1rem; color: var(--color-navy-deep); margin-bottom: 0.75rem;">Role Overview</h4>
            <p style="font-family: var(--font-body); color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
              We are seeking an experienced ${title} to lead site-level engineering, construction oversight, and high-voltage grid integration for utility-scale solar and battery storage projects.
            </p>
            <h4 style="font-size: 1.1rem; color: var(--color-navy-deep); margin-bottom: 0.75rem;">Key Requirements</h4>
            <ul style="font-family: var(--font-body); color: var(--color-text-muted); padding-left: 1.25rem; line-height: 1.7; margin-bottom: 2rem;">
              <li>B.S. in Electrical, Civil, or Mechanical Engineering</li>
              <li>5+ years utility-scale solar or EPC field experience</li>
              <li>Proficiency with High Voltage relay protection and SCADA networks</li>
            </ul>
            <button onclick="alert('Application submitted for ${title}! Our recruitment team will review your profile.');" class="btn btn-lime" style="width: 100%;">Apply Now &rarr;</button>
          </div>
        `);
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/hero_solar_farm.png" alt="SOLV Energy Careers" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block">
          <span class="eyebrow eyebrow-lime">CAREERS AT SOLV ENERGY</span>
          <h1 class="hero-title">Build What Powers <span class="highlight-blue">Tomorrow</span></h1>
          <p class="hero-subtitle">Join over 1,500 dedicated professionals shaping the future of utility-scale clean energy infrastructure.</p>
        </div>
      </div>
    </section>



    <section style="background: #FFF; padding: 6rem 0;">
      <div class="container" style="max-width: 900px;">
        <div style="text-align: center; margin-bottom: 4rem;">
          <span class="eyebrow">OPEN POSITIONS</span>
          <h2 style="font-size: 2.8rem; color: var(--color-navy-deep);">Current Opportunities</h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <!-- Job 1 -->
          <div class="service-card" data-job-title="Senior High Voltage Electrical Engineer" data-job-loc="San Diego, CA (Hybrid)" data-job-dept="Engineering" style="min-height: auto; flex-direction: row; align-items: center; justify-content: space-between; cursor: pointer; padding: 1.5rem 2rem;">
            <div>
              <span class="eyebrow" style="margin-bottom: 0.25rem;">ENGINEERING</span>
              <h3 style="font-size: 1.25rem; color: var(--color-navy-deep); margin-bottom: 0.2rem;">Senior High Voltage Electrical Engineer</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">San Diego, CA • Full-time</span>
            </div>
            <span class="btn btn-outline-dark" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">View Role &rarr;</span>
          </div>

          <!-- Job 2 -->
          <div class="service-card" data-job-title="Utility Solar Construction Manager" data-job-loc="Paris, TX (On-site)" data-job-dept="Operations" style="min-height: auto; flex-direction: row; align-items: center; justify-content: space-between; cursor: pointer; padding: 1.5rem 2rem;">
            <div>
              <span class="eyebrow" style="margin-bottom: 0.25rem;">CONSTRUCTION</span>
              <h3 style="font-size: 1.25rem; color: var(--color-navy-deep); margin-bottom: 0.2rem;">Utility Solar Construction Manager</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">Paris, TX • Full-time</span>
            </div>
            <span class="btn btn-outline-dark" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">View Role &rarr;</span>
          </div>

          <!-- Job 3 -->
          <div class="service-card" data-job-title="BESS Commissioning Lead Specialist" data-job-loc="Clark County, NV" data-job-dept="Storage" style="min-height: auto; flex-direction: row; align-items: center; justify-content: space-between; cursor: pointer; padding: 1.5rem 2rem;">
            <div>
              <span class="eyebrow" style="margin-bottom: 0.25rem;">ENERGY STORAGE</span>
              <h3 style="font-size: 1.25rem; color: var(--color-navy-deep); margin-bottom: 0.2rem;">BESS Commissioning Lead Specialist</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">Clark County, NV • Full-time</span>
            </div>
            <span class="btn btn-outline-dark" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">View Role &rarr;</span>
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
