var slideIndex = 1;
showDiv(slideIndex);

function plusdiv(n){
 showDiv(slideIndex += n)
}
function currentSlide(n) {
    showDiv(slideIndex = n);
}

function showDiv(n){

var x = document.getElementsByClassName("myslides");

  if (n > x.length){slideIndex = 1};
  if (n < 1){slideIndex = x.length};
  for (var i = 0; i < x.length; i++){
     x[i].style.display = "none";              
  }
 
   x[slideIndex - 1].style.display = "block";

}