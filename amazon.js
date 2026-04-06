const images = document.querySelectorAll(".header-silder ul img");
const backBtn =document.querySelector(".control-back");
const nextBtn = document.querySelector(".control-next");
const scroller = document.querySelectorAll(".products");

let n = 0 ;
function changeSlider(){
    images.forEach((img,i) => {
        img.style.display = i === n ? "block" : "none";
    })
}
changeSlider();
backBtn.addEventListener("click",() => {
    if(n > 0){
        n--
    }
    else{
        n = images.length-1;
    }
    changeSlider();
}
);

nextBtn.addEventListener("click",(e) => {
    if(n < images.length-1){
        n++

    }
    else{
        n=0
    }
    changeSlider();
})
for(const item of scroller) {
    item.addEventListener("wheel", (e) => {
       e.preventDefault();
     item.scrollLeft += e.deltaY;
    })
}