// MODAL & DRAWER INTERACTION HANDLER

export function initModals() {
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');
  const closeVideoBtn = document.getElementById('close-video-modal');

  const drawerModal = document.getElementById('drawer-modal');
  const drawerContent = document.getElementById('drawer-content');
  const closeDrawerBtn = document.getElementById('close-drawer');

  // Video Modal Triggers
  document.addEventListener('click', (e) => {
    const videoBtn = e.target.closest('[data-open-video]');
    if (videoBtn) {
      const videoUrl = videoBtn.getAttribute('data-open-video') || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
      if (videoFrame && videoModal) {
        videoFrame.src = videoUrl;
        videoModal.classList.add('open');
        videoModal.setAttribute('aria-hidden', 'false');
      }
    }
  });

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', () => {
      if (videoFrame && videoModal) {
        videoFrame.src = '';
        videoModal.classList.remove('open');
        videoModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal && videoFrame) {
        videoFrame.src = '';
        videoModal.classList.remove('open');
        videoModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Drawer Triggers (Leadership, Jobs, PDFs, News)
  if (closeDrawerBtn && drawerModal) {
    closeDrawerBtn.addEventListener('click', () => {
      drawerModal.classList.remove('open');
      drawerModal.setAttribute('aria-hidden', 'true');
    });
    drawerModal.addEventListener('click', (e) => {
      if (e.target === drawerModal) {
        drawerModal.classList.remove('open');
        drawerModal.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

export function openDrawer(htmlContent) {
  const drawerModal = document.getElementById('drawer-modal');
  const drawerContent = document.getElementById('drawer-content');

  if (drawerModal && drawerContent) {
    drawerContent.innerHTML = htmlContent;
    drawerModal.classList.add('open');
    drawerModal.setAttribute('aria-hidden', 'false');
  }
}
