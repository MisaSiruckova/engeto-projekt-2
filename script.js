const menuIcon = document.querySelector(".menu-icon");

const menuList = document.querySelector("nav");

const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});

const buttons = document.querySelectorAll(".button");
const paragraphs = document.querySelectorAll(".paragraph");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetParagraph = document.getElementById(button.classList[1]);

    paragraphs.forEach((paragraph) => {
      if (paragraph === targetParagraph) {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    });
  });
});
