let band = document.querySelector('.measureband');

let frame = 0

window.addEventListener('wheel', (event)=>{
   
    band.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -180px);"
    frame += 0.1;
    if(frame > 9) frame = 0

})