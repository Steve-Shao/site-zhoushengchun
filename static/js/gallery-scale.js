// Apply custom hover scale for gallery images
document.addEventListener('DOMContentLoaded', function() {
  const galleries = document.querySelectorAll('.gallery[data-hover-scale]');
  
  galleries.forEach(function(gallery) {
    const scale = gallery.getAttribute('data-hover-scale');
    const effectClass = Array.from(gallery.classList)
      .find(cls => cls.startsWith('hover-effect-'));
      
    if (scale && effectClass) {
      const styleEl = document.createElement('style');
      styleEl.textContent = `.${effectClass} figure:hover { transform: scale(${scale}) !important; }`;
      document.head.appendChild(styleEl);
    }
  });
}); 