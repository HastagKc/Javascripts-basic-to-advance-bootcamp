// Accessing elements
let pre_btn = document.getElementById("pre_btn");
let next_btn = document.getElementById("next_btn");
let image = document.getElementById("image");

// Creating image array in JS
let imagesArr = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
];

let index = 0;
image.src = imagesArr[index]; // Initial image display

pre_btn.addEventListener("click", function () {
  if (index <= 0) {
    alert("This is the first image");
  } else {
    index--;
    image.src = imagesArr[index];
  }
});

next_btn.addEventListener("click", function () {
  if (index >= imagesArr.length - 1) {
    alert("This is the last image");
  } else {
    index++;
    image.src = imagesArr[index];
  }
});
