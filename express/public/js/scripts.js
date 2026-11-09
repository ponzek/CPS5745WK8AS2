document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  // Highlight the nav link for the current page.
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
      link.classList.add("active");
    }
  });

  // Fill in the footer year.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
