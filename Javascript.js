let slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n){
 showDiv(slideIndex += n)
}


function showDiv(n){

let x = document.getElementsByClassName("myslides");

  if (n > x.length){slideIndex = 1};
  if (n < 1){slideIndex = x.length};
  for (let i = 0; i < x.length; i++){
     x[i].style.display = "none";              
  }
 
   x[slideIndex - 1].style.display = "block";

}