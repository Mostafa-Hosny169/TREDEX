$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    // Adjust the threshold as needed
    navbar.classList.add("fixed-top", "scrolled");
  } else {
    navbar.classList.remove("fixed-top", "scrolled");
  }
});
