const slides = document.querySelectorAll('.slide');
const img = document.querySelectorAll ('.img');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideIndex =1;

moveSlide(slideIndex);

function plusSlide(n) {
    moveSlide(slideIndex += n);
  }

// prevBtn.addEventListener(onclick, () => prev)
// nextBtn.addEventListener(onclick, () => next )

function moveSlide(n) {
    let i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = imgslides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    slides[slideIndex-1].style.display = "block";  
}


  

// function prev (n){
// moveSlide(slideIndex -=n)
// };
// function next (n){
//     moveSlide (slideIndex +=n)
// }

