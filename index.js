const imgsCards = (sizes) => {
  return [
    {
      image: `<img src="./images/${sizes}/image-deep-earth.jpg" alt="earth" />`,
      name: "DEEP EARTH",
    },
    {
      image: ` <img src="./images/${sizes}/image-night-arcade.jpg" alt="arcade" />`,
      name: "NIGHT ARCADE",
    },
    {
      image: `<img src="./images/${sizes}/image-soccer-team.jpg" alt="soccer" />`,
      name: "SOCCER TEAM",
    },
    {
      image: `<img src="./images/${sizes}/image-grid.jpg" alt="the-grid" />`,
      name: "THE GRID",
    },
    {
      image: `<img src="./images/${sizes}/image-from-above.jpg" alt="above" />`,
      name: "FROM UP ABOVE VR",
    },
    {
      image: `<img src="./images/${sizes}/image-pocket-borealis.jpg" alt="boreals" />`,
      name: "POCKET BOREALS",
    },
    {
      image: `<img src="./images/${sizes}/image-curiosity.jpg" alt="the-coriosity"/>`,
      name: "THE CURIOSITY",
    },
    {
      image: `<img src="./images/${sizes}/image-fisheye.jpg" alt=" make-it-fisheye" />`,
      name: " MAKE IT FISHEYE",
    },
  ];
};
const cardsSIZE = imgsCards(window.screen.width > 800 ? "desktop" : "mobile");

const cards = document.getElementById("cards");

const createCard = (image, name) => {
  cards.insertAdjacentHTML(
    "beforeend",
    `<article class="img-article"> ${image}
          <h4> ${name} </h4> </article>`
  );
};

cardsSIZE.forEach(({ image, name }) => createCard(image, name));

const hamburger = document.getElementById("hamburger");
const closeBurger = document.getElementById("close");
const list = document.getElementById("list");

hamburger.addEventListener("click", () => {
  hamburger.classList.remove("ToggleNav");
  closeBurger.classList.add("ToggleNav");
  list.style.display = "flex";
});
closeBurger.addEventListener("click", () => {
  closeBurger.classList.remove("ToggleNav");
  hamburger.classList.add("ToggleNav");
  list.style.display = "none";
});
