const historys = document.querySelectorAll(".history");
const hightlight = document.querySelector(".hightlight");
const hightlightImg = document.querySelector(".hightlight img");
const historyImg = document.querySelectorAll(".history img");

let currentIndex = 0;
historys.forEach((history, index) => {
  history.addEventListener("click", () => {
    hightlightImg.src = historyImg[index].src;
    hightlight.style.display = "flex";
  });
});
