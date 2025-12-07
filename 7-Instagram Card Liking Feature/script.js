let card=document.querySelector('.card');
let love=document.querySelector('i');

card.addEventListener('dblclick',function(){
  love.style.opacity=1;
  love.style.transform= 'translate(-50%, -50%) scale(1) rotate(0deg)' ;

  setTimeout(function(){
    love.style.transform= 'translate(-50%, -350%) scale(1) rotate(30deg)' ;
  },600);
  setTimeout(function(){
    
    love.style.opacity=0;
  },800);
  setTimeout(function(){
    love.style.transform= 'translate(-50%, -50%) scale(1) rotate(-30deg)' ;
    
  },1000);


})