document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.querySelector(".connect-button");
  const heartEl = document.querySelectorAll(".circle-heart");
  heartEl.forEach((heart) => {
    heart.addEventListener("click", () => {
      if (heart.classList.value.includes("red")) {
        heart.classList.remove("red");
      } else {
        heart.classList.add("red");
      }
    });
  });
  connectBtn.addEventListener("click", () => {
    // on selectionne tout les elements ayant la classe hidden dont la div qui va se faire ajouter la classe modal
    const hiddenEl = document.querySelectorAll(".hidden");
    const modal = hiddenEl[hiddenEl.length - 1];
    modal.classList.add("modal");
    const closeBtn = document.querySelector(".close-button");
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("modal");
    });
  });
});
