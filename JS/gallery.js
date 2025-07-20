document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.querySelector('.gallery-modal-img');
  const closeBtn = document.querySelector('.modal-x');
  const thumbnails = document.querySelectorAll('.gallery-grid img');

  function lockScroll() {
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.body.style.overflow = '';
  }

  thumbnails.forEach(img => {
    img.addEventListener('click', function() {
      modal.classList.add('active');
      modalImg.src = this.src;
      modalImg.alt = this.alt || '';
      // Show the image again when opening
      modalImg.style.display = '';
      setTimeout(() => {
        closeBtn.classList.add('open');
      }, 10); // 10ms delay ensures transition triggers
      lockScroll();
    });
  });

  function closeModal() {
    closeBtn.classList.remove('open');
    modalImg.style.display = 'none';
    setTimeout(() => {
      modal.classList.remove('active');
      setTimeout(() => {
        // Set to transparent gif instead of empty string
        modalImg.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        modalImg.style.display = '';
        unlockScroll();
      }, 20);
    }, 150);
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});