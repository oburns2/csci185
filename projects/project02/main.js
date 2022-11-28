const art = [
  {image_url:"art/revaandholly.jpg"},
  {image_url:"art/ancient.png"},
  {image_url:"art/aspen.jpg"},
  {image_url:"art/rhys.jpg"},
  {image_url:"art/cori.jpg"},
  {image_url:"art/"},
  {image_url:"art/"},
  {image_url:"art/"},
]

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

function showArt(){
  for(let i = 0; i < art.length; i++){
    const template=`
    <img class="drawing" src="art/revaandholly.jpg">`
    document.querySelector('.art-container').insertAdjacentHTML ('beforeend', template);
  }
}