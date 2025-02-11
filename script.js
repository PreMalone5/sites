document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector('.industry-grid');
  const btnPrev = document.querySelector('.slider-btn.prev');
  const btnNext = document.querySelector('.slider-btn.next');
  

  // Get one slider item to determine the scroll amount
  const sliderItem = document.querySelector('.slider');
  // Include gap (here, assumed 16px, adjust if needed)
  let scrollAmount = sliderItem ? sliderItem.clientWidth + 16 : 320;

  btnPrev.addEventListener('click', function () {
    sliderContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  btnNext.addEventListener('click', function () {
    sliderContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.partners-grid');
  container.innerHTML += container.innerHTML;
  const scrollSpeed = 1;      // pixels to scroll per interval
  const scrollInterval = 20;  // interval time in milliseconds

  // Auto-scroll function using setInterval
  let autoScroll = setInterval(() => {
    // Increase scrollLeft by scrollSpeed pixels
    container.scrollLeft += scrollSpeed;
    
    // Reset to the beginning if we've reached the end
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
  }, scrollInterval);

  // Pause auto-scrolling on mouse over
  container.addEventListener('mouseover', () => {
    clearInterval(autoScroll);
  });

  // Resume auto-scrolling when mouse leaves the container
  container.addEventListener('mouseout', () => {
    autoScroll = setInterval(() => {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, scrollInterval);
  });
});


