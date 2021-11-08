const images = [
    "img0.jpeg",
    "img1.jpeg",
    "img2.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
// console.log(chosenImage);
// console.log(bgImg);
bgImg.src = `img/${chosenImage}`;
// document.body.appendChild(bgImg);
document.body.prepend(bgImg);