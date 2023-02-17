const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
    } else {
        entry.target.classList.add('hidden');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((element) => {
  observer.observe(element);
});
