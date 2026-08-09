// PROJECTS PAGE & EIFFEL DETAIL SHOWCASE RENDERER
export function renderProjects() {
  setTimeout(() => {
    const filterBtns = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('[data-category]');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/eiffel_project.png" alt="SOLV Energy Projects" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block reveal-on-scroll">
          <span class="eyebrow eyebrow-lime">PROJECT PORTFOLIO</span>
          <h1 class="hero-title">Where Execution Meets <span class="highlight-blue">Impact</span></h1>
          <p class="hero-subtitle">Over 500 utility-scale solar, battery storage, and high-voltage power plants constructed and managed across America.</p>
        </div>
      </div>

    </section>

    <!-- FILTERABLE PROJECTS GALLERY -->
    <section style="background: #FFF; padding: 5rem 0 8rem; position: relative;">
      <div class="container">
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 3.5rem; flex-wrap: wrap;" class="reveal-on-scroll">
          <button class="btn btn-outline-dark active" data-filter="all">All Projects</button>
          <button class="btn btn-outline-dark" data-filter="solar">Solar PV</button>
          <button class="btn btn-outline-dark" data-filter="bess">Energy Storage (BESS)</button>
          <button class="btn btn-outline-dark" data-filter="hv">High Voltage</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem;">
          <!-- Project 1: Eiffel -->
          <div class="service-card" data-category="solar" style="min-height: 420px; padding: 0; overflow: hidden;" data-service-index="0">
            <img src="/assets/eiffel_project.png" alt="Eiffel Solar Farm" style="width: 100%; height: 220px; object-fit: cover;">
            <div style="padding: 1.5rem;">
              <span class="eyebrow" style="margin-bottom: 0.25rem;">PARIS, TX</span>
              <h3 style="font-size: 1.6rem; color: var(--color-navy-deep); margin-bottom: 0.5rem;">Eiffel Solar Farm</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">300 MWp utility-scale solar PV facility providing clean power to East Texas.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 1rem;">
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--color-blue-primary);">300 MWp</span>
                <a href="#/contact" style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">View Showcase &rarr;</a>
              </div>
            </div>
          </div>

          <!-- Project 2: Gemini -->
          <div class="service-card" data-category="bess" style="min-height: 420px; padding: 0; overflow: hidden;" data-service-index="1">
            <img src="/assets/bess_storage.png" alt="Gemini BESS Facility" style="width: 100%; height: 220px; object-fit: cover;">
            <div style="padding: 1.5rem;">
              <span class="eyebrow" style="margin-bottom: 0.25rem;">CLARK COUNTY, NV</span>
              <h3 style="font-size: 1.6rem; color: var(--color-navy-deep); margin-bottom: 0.5rem;">Gemini Storage Facility</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">380 MW / 1,400 MWh standalone & paired battery energy storage system.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 1rem;">
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--color-blue-primary);">1,400 MWh</span>
                <a href="#/contact" style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">View Showcase &rarr;</a>
              </div>
            </div>
          </div>

          <!-- Project 3: High Voltage Interconnect -->
          <div class="service-card" data-category="hv" style="min-height: 420px; padding: 0; overflow: hidden;" data-service-index="2">
            <img src="/assets/high_voltage_substation.png" alt="High Voltage Substation" style="width: 100%; height: 220px; object-fit: cover;">
            <div style="padding: 1.5rem;">
              <span class="eyebrow" style="margin-bottom: 0.25rem;">WEST TEXAS</span>
              <h3 style="font-size: 1.6rem; color: var(--color-navy-deep); margin-bottom: 0.5rem;">Apex 500 kV Substation</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">500 kV main step-up substation with dual 350 MVA power transformers.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 1rem;">
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--color-blue-primary);">500 kV</span>
                <a href="#/contact" style="font-size: 0.85rem; font-weight: 700; color: var(--color-lime-dark);">View Showcase &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- CONTEXTUAL CTA BANNER (SPEC SECTION 27) -->
    <section style="background: linear-gradient(180deg, #0054A6 0%, #003B75 100%); color: #FFF; padding: 7rem 0 8rem; text-align: center; position: relative;">
      <div class="container reveal-scale">
        <span class="eyebrow eyebrow-lime">START YOUR NEXT ASSET</span>
        <h2 style="font-size: 2.8rem; margin-bottom: 1.5rem;">Let's build the next one.</h2>
        <a href="#/contact" class="btn btn-lime">Start a Conversation &rarr;</a>
      </div>

    </section>

    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
      </div>
    </footer>
  `;
}
