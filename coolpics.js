document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const navList = document.querySelector("#navigation ul");

  menuButton.addEventListener("click", () => {
    navList.classList.toggle("hide");
  });

  function handleResize() {
    if (window.innerWidth > 1000) {
      navList.classList.remove("hide");
    } else {
      navList.classList.add("hide");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  const gallery = document.querySelector(".gallery");
  const modal = document.getElementById("image-modal");

  gallery.addEventListener("click", (event) => {
    const img = event.target.closest("img");
    if (!img) return;
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const base = src.split("-")[0];
    modal.innerHTML = `<img src="${base}-full.jpeg" alt="${alt}"><button class="close-viewer">X</button>`;
    modal.showModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-viewer") || event.target === modal) {
      modal.close();
    }
  });
});
