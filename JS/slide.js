const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.square');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
      square.classList.remove('square-hide');
    return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
    quare.classList.add('square-hide');
  });
});

observer.observe(document.querySelector('.square-wrapper'));