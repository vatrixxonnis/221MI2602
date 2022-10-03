document.getElementById('active').style.display = "block";

function showSlides(n) {
  var i, slideIndex;
  var slides = document.getElementsByClassName("slide fade");
  var dots = document.getElementsByClassName("dot");
  if (n == slides.length) {
    slideIndex = 0;
  }
  else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  else {
    slideIndex = n;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].id = "";
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].id = "active"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
}

function plusSlides(n) {
  showSlides(currentSlideIndex() + n);
}

function currentSlide(n) {
  showSlides(n);
}

function currentSlideIndex() {
  var element = document.getElementById("active");
  return index = Array.from(element.parentElement.children).indexOf(element);
}
