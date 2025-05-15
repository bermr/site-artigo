// Toggle menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector(".navbar").classList.toggle("active");
});

// Toggle dropdowns no modo mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.querySelector(".dropdown-toggle").addEventListener("click", function(e) {
    // Prev default only on mobile
    if (window.innerWidth <= 1000) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });
});
