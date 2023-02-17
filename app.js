const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hidden');
    } else {
        entry.target.classList.remove('hidden');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
