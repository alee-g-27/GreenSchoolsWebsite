var slideIndex2 = 1;
var slide_updater2;

showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {

  showSlides2(slideIndex2 += n);
  slideUpdater2();

}

function showSlides2(n) {

  var i;
  var slides2 = document.getElementsByClassName("mySlides-chisiamo");
  var dots2 = document.getElementsByClassName("dot-chisiamo");

  if (n > slides2.length) {slideIndex2 = 1}

  if (n < 1) {slideIndex2 = slides2.length}

  for (i = 0; i < slides2.length; i++) {
    
      slides2[i].style.display = "none";
      
  }
  for (i = 0; i < dots2.length; i++) {
    
     dots2[i].className = dots2[i].className.replace(" active", "");
      
  }
  slides2[slideIndex2-1].style.display = "block";
 dots2[slideIndex2-1].className += " active";

}

function slideUpdater2() {

  clearInterval(slide_updater2);
  slide_updater2 = setInterval(function () {showSlides2(++slideIndex2);}, 2500)
  
}

slideUpdater2();