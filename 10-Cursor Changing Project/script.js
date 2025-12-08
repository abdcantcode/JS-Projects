let pointer = document.querySelector('img');
let body=document.querySelector('body');

body.addEventListener('mousemove',function(val){
  pointer.style.top=val.y +'px';
  pointer.style.left=val.x+'px';
})