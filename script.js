//TODO SLIDER FUNTION MAKE TO SLIDE
let slides = document.querySelectorAll(".slide");
let imgslide = document.querySelector(".hero-section");
console.log(imgslide);

// console.log(slides);
let clutter = 0;
slides.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});
const per = () => {
  clutter--;
  Img();
};
const next = () => {
  if (clutter <= 5) {
    clutter++;
    Img();
  } else {
  }
};

const Img = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${clutter * 100}%)`;
  });
};
//TODO SLIDE NAVEBAR FUNCTION
let allBar = document.querySelector("#bar");

const bar = () => {
  allBar.style.display = "flex";
};
const can = () => {
  allBar.style.display = "none";
};
// =======================================================================
let scrollBigContainer = document.querySelector(".big-container-1");
console.log(scrollBigContainer);
const forward_1 = () => {
  scrollBigContainer.scrollLeft += 1300;
};
const reverse_1 = () => {
  scrollBigContainer.scrollLeft -= 1300;
};

let scrollBigContainer1 = document.querySelector(".big-container1");
const forward1 = () => {
  scrollBigContainer1.scrollLeft += 1300;
};
const reverse1 = () => {
  scrollBigContainer1.scrollLeft -= 1300;
};
// ? Most wished for in Video Games -->

// let mvs = document.querySelector("#m-v-w")
// const forward_2 = () => {
//   mvs.scrollLeft += 1300;
// };
// const reverse_2 = () => {
//   mvs.scrollLeft -= 1300;
// };

function scroll(container, forward, backward, number) {
  let box = document.querySelector(`${container}`);
  let next = document.querySelector(`${forward}`);
  let pre = document.querySelector(`${backward}`);
  console.log(box)
  console.log(next)
  console.log(pre)
  next.addEventListener("click", (e) => {
    box.scrollLeft += number;
  });
  pre.addEventListener("click", (e) => {
    box.scrollLeft -= number;
  });
}
scroll("#cont-1", "#next-1", "#pre-1", 1300);
scroll("#cont-2", "#next-2", "#pre-2", 1300);
scroll("#cont-3", "#next-3", "#pre-3", 1300);
scroll("#cont-4", "#next-4", "#pre-4", 1300);
scroll("#cont-5", "#next-5", "#pre-5", 1300);
scroll("#cont-6", "#next-6", "#pre-6", 1300);
scroll("#cont-7", "#next-7", "#pre-7", 1300);
scroll("#cont-8", "#next-8", "#pre-8", 1300);
