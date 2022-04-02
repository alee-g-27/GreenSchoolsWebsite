//Get the button:
//mybutton = document.getElementsByClassName(".go-top-image");
/*mybutton = documentElement.getElementsByClassName(".go-top-image");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/


$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
      $('.go-top-image').fadeIn();
  }else {
      $('.go-top-image').fadeOut();
  }
});

function fadeIn(){
  style.display = "block";
}

function fadeOut(){
  style.display = "none";
}