let inc=document.querySelector('#inc');
let dec=document.querySelector('#dec');
let h=document.querySelector('h1');
let a=0;

inc.addEventListener('click',function(){
  a++;
  h.innerHTML=a;
})
dec.addEventListener('click',function(){
  a--;
  h.innerHTML=a;
})