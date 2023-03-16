let sli = 0;

function carousel(slide){
    let slides = document.getElementsByClassName("review-item");

    if (slide >= slides.length){
        slide = 0;
        sli = 0;
    }

    if(slide < 0){
        slide = slides.length -1;
        sli = slides.length -1;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slide].style.display = "block";

    
}

function previous(){
    sli = sli - 1;
    carousel(sli);
}

function next(){
    sli = sli + 1;
    carousel(sli);
}

window.onload = function() {
  carousel(sli);
};