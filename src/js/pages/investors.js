// INVESTORS PAGE VIEW RENDERER
import { openDrawer } from '../modals.js';

export function renderInvestors() {
  setTimeout(() => {
    document.querySelectorAll('[data-doc-title]').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-doc-title');
        openDrawer(`
          <div style="font-family: var(--font-heading);">
            <span class="eyebrow">DOCUMENT PREVIEW</span>
            <h2 style="font-size: 2rem; color: var(--color-blue-primary); margin-bottom: 1rem;">${title}</h2>
            <div style="padding: 2rem; background: #F1F5F9; border-radius: 8px; text-align: center; margin-bottom: 2rem; border: 2px dashed #CBD5E1;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-blue-primary); margin-bottom: 0.5rem;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <div style="font-weight: 700; color: var(--color-navy-deep);">${title}.pdf</div>
              <div style="font-size: 0.85rem; color: var(--color-text-muted);">Format: Verified PDF (4.2 MB)</div>
            </div>
            <p style="font-family: var(--font-body); color: var(--color-text-muted); line-height: 1.6; margin-bottom: 2rem;">
              This report summarizes SOLV Energy's operational execution, capital allocation efficiency, pipeline development, and ESG benchmarks for the preceding financial period.
            </p>
            <button onclick="alert('Downloading ${title}.pdf...')" class="btn btn-lime" style="width: 100%;">Download Official PDF &rarr;</button>
          </div>
        `);
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/bess_storage.png" alt="SOLV Energy Investors" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block">
          <span class="eyebrow eyebrow-lime">INVESTORS</span>
          <h1 class="hero-title">Financial Performance & <span class="highlight-blue">Growth</span></h1>
          <p class="hero-subtitle">Solid fundamentals, disciplined execution, and long-term contract backlog driving enterprise value.</p>
        </div>
      </div>
    </section>

    <div class="section-curve">
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none"><path d="M0 60C360 120 720 120 1080 60C1260 30 1380 90 1440 120H0V60Z" fill="#FFFFFF"/></svg>
    </div>

    <section style="background: #FFF; padding: 6rem 0;">
      <div class="container" style="max-width: 850px;">
        <div style="text-align: center; margin-bottom: 4rem;">
          <span class="eyebrow">REPORTS & RESOURCES</span>
          <h2 style="font-size: 2.8rem; color: var(--color-navy-deep);">Investor Documentation</h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div>
              <h3 style="font-size: 1.2rem; color: var(--color-navy-deep);">2026 Annual Report & ESG Disclosure</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">Published Q1 2026 • PDF Document</span>
            </div>
            <button class="btn btn-outline-dark" data-doc-title="2026 Annual Report & ESG Disclosure">View PDF &rarr;</button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div>
              <h3 style="font-size: 1.2rem; color: var(--color-navy-deep);">Q2 Institutional Investor Presentation</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">Published Q2 2026 • Presentation Deck</span>
            </div>
            <button class="btn btn-outline-dark" data-doc-title="Q2 Institutional Investor Presentation">View PDF &rarr;</button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div>
              <h3 style="font-size: 1.2rem; color: var(--color-navy-deep);">Full-Year Financial Audited Results</h3>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">Audited Statements • Financial Release</span>
            </div>
            <button class="btn btn-outline-dark" data-doc-title="Full-Year Financial Audited Results">View PDF &rarr;</button>
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
