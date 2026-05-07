const historys = document.querySelectorAll(".history");
const hightlight = document.querySelector(".hightlight");
const hightlightImg = document.querySelector(".hightlight img");
const historyImg = document.querySelectorAll(".history img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;

historys.forEach((history, index) => {
  history.addEventListener("click", () => {
    // hightlightImg.src = historyImg[index].src;
    // hightlight.style.display = "flex";
    currentIndex = index;
    updateImage(currentIndex);
  });
});

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= historyImg.length) {
    currentIndex = 0;
  }
  updateImage(currentIndex);
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = historyImg.length - 1;
  }

  updateImage(currentIndex);
});

function updateImage(currentIndex) {
  setTimeout(() => {
    hightlightImg.src = historyImg[currentIndex].src;
    hightlight.style.display = "flex";
    console.log(currentIndex);
  }, 200);
}
