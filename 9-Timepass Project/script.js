let img=document.querySelector('img');
let span=document.querySelector('span');

img.addEventListener('mouseenter',function(){
  span.innerHTML="DON'T YOU UNDERSTAND HE IS MINE 😡"
})
img.addEventListener('mouseleave',function(){
  span.innerHTML="HAAN AISICH DOOR RAHO 😁"
})
