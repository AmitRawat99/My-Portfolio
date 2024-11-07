
let MenuBtn = document.getElementById('bars');
MenuBtn.addEventListener('click',function(e){
   document.querySelector('body').classList.toggle('mobile-now-active');
   this.classList.toggle('fa-xmark');
})


let cursorDot = document.querySelector(".cursor-Dot");
let cursorPointer = document.querySelector(".cursor-pointer");

window.addEventListener("mousemove", function (event) {
  let posX = event.clientX;
  let posY = event.clientY;

  cursorDot.style.left= `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorPointer.style.top = `${posY}px`
  cursorPointer.style.left = `${posX}px`

  cursorPointer.animate({
    left : `${posX}px`,
    top: `${posY}px`
  },{duration : 500,fill:'forwards'})
});

