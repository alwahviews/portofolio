const historys = document.querySelectorAll(".history");
const hightlight = document.querySelector(".hightlight");
const hightlightImg = document.querySelector(".hightlight img");
const historyImg = document.querySelectorAll(".history img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const deleteBtn = document.querySelector(".delete");
const page3 = document.querySelector(".page3");

let currentIndex = 0;

historys.forEach((history, index) => {
  history.addEventListener("click", () => {
    // hightlightImg.src = historyImg[index].src;
    // hightlight.style.display = "flex";
    page3.classList.add("up");
    currentIndex = index;
    updateImage(currentIndex);
    // page3.style.height = "800px";
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

deleteBtn.addEventListener("click", () => {
  hightlight.style.display = "none";

  page3.classList.remove("up");
});
