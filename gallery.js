let allbigs = document.querySelectorAll("div.big .viewer");

let allgallery = document.querySelectorAll("div.gallery");
let numgallery = allgallery.length
for (let i = 0; i < numgallery; i++) {

  let big = allbigs [i]

  let thumbnails = [ ...allgallery[i].querySelectorAll("a") ];

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      let img = thumbnail.querySelector("img");
      big.setAttribute("style", `background-image:url("${img.src}")`)
      big.scrollIntoView({behavior:'smooth', block:"start", inline:"start"})
    });
  });
}
