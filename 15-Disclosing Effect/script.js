let body=document.querySelector('body');


body.addEventListener('mousemove',function(dets){
  body.style.setProperty("--x",dets.clientX+'px');
  body.style.setProperty("--y",dets.clientY+'px');
});