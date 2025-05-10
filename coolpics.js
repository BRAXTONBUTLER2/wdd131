document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const nav = document.getElementById("navigation");

  menuButton.addEventListener("click", () => {
    const isVisible = nav.querySelector("ul").style.display === "block";
    nav.querySelector("ul").style.display = isVisible ? "none" : "block";
  });
});
