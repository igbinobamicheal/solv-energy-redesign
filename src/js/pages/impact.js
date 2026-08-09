// IMPACT PAGE VIEW RENDERER
export function renderImpact() {
  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/hero_solar_farm.png" alt="SOLV Energy Impact" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block">
          <span class="eyebrow eyebrow-lime">SUSTAINABILITY & IMPACT</span>
          <h1 class="hero-title">Measuring Impact.<br><span class="highlight-blue">Building What Lasts.</span></h1>
          <p class="hero-subtitle">Delivering renewable power that reduces carbon emissions, generates local jobs, and strengthens energy security.</p>
        </div>
      </div>
    </section>



    <section style="background: #FFF; padding: 6rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2.5rem; text-align: center;">
          <div style="padding: 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div style="font-family: var(--font-heading); font-size: 3.2rem; font-weight: 800; color: var(--color-blue-primary);" data-counter="21" data-suffix=" GW">0</div>
            <div style="font-weight: 700; color: var(--color-navy-deep); margin-top: 0.5rem;">Clean Energy Capacity</div>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.5rem;">Installed across 500+ solar & BESS power plants nationwide.</p>
          </div>

          <div style="padding: 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div style="font-family: var(--font-heading); font-size: 3.2rem; font-weight: 800; color: var(--color-blue-primary);" data-counter="14" data-suffix="M">0</div>
            <div style="font-weight: 700; color: var(--color-navy-deep); margin-top: 0.5rem;">Metric Tons CO2 Offset</div>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.5rem;">Equivalent to removing 3 million gas vehicles from the road annually.</p>
          </div>

          <div style="padding: 2rem; background: var(--color-light-bg); border-radius: var(--border-radius-md); border: 1px solid #E2E8F0;">
            <div style="font-family: var(--font-heading); font-size: 3.2rem; font-weight: 800; color: var(--color-blue-primary);" data-counter="18000" data-suffix="+">0</div>
            <div style="font-weight: 700; color: var(--color-navy-deep); margin-top: 0.5rem;">Clean Tech Jobs Created</div>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.5rem;">High-paying craft, engineering, and operation roles.</p>
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
