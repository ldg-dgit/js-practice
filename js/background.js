const images = [
  "img/ana-paula-grimaldi-cMg-yeS2g6o-unsplash.jpg",
  "img/ana-paula-grimaldi-xxiRnZHfVj8-unsplash.jpg",
  "img/john-salzarulo-H2j2rotqudo-unsplash.jpg",
  "img/richard-gatley-La5V_Qr6h3A-unsplash.jpg",
  "img/spacex--p-KCm6xB9I-unsplash.jpg",
  "img/zoltan-tasi-t8__xN-MdNI-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);
