// CUSTOM DESKTOP CURSOR INTERACTION SYSTEM
export function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.innerWidth < 1024) return;

  const dot = cursor.querySelector('.cursor-dot');
  const circle = cursor.querySelector('.cursor-circle');
  const label = cursor.querySelector('.cursor-label');

  let mouseX = -100;
  let mouseY = -100;
  let circleX = -100;
  let circleY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animate() {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;

    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;

    label.style.left = `${circleX}px`;
    label.style.top = `${circleY}px`;

    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor], a, button, .service-card, .intro-image-card');
    if (target) {
      cursor.classList.add('hovering');
      const cursorText = target.getAttribute('data-cursor') || 'View';
      label.textContent = cursorText;
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-cursor], a, button, .service-card, .intro-image-card');
    if (target) {
      cursor.classList.remove('hovering');
      label.textContent = '';
    }
  });
}
