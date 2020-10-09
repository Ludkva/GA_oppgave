let band = document.querySelector('.measureband');

window.addEventListener('wheel', (event)=>{
    //event.deltaY;
    band.style.cssText = "background-position-x: calc(1 x -180px);"

})