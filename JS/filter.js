function filterGallery(category) {
  const items = document.querySelectorAll('.gallery a');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category.includes(category)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}