let big = document.querySelector("div.big img");

let thumbnails = [ ...document.querySelectorAll("div.gallery a") ];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    let img = thumbnail.querySelector("img");
    big.src = img.src;
  });
});
