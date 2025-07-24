 let current = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.add('hidden');
      slide.classList.remove('active');
      dots[i].classList.remove('bg-gray-800');
      dots[i].classList.add('bg-gray-400');
    });

    slides[index].classList.remove('hidden');
    slides[index].classList.add('active');
    dots[index].classList.add('bg-gray-800');
    dots[index].classList.remove('bg-gray-400');

    current = index;
  }

  function changeSlide(step) {
    const newIndex = (current + step + slides.length) % slides.length;
    showSlide(newIndex);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  // Initial highlight
  showSlide(current);