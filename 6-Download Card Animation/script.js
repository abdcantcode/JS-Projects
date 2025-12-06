let btn=document.querySelector('button');
let percentage=0;
let h1=document.querySelector('h1');
let inner=document.querySelector('.inner');
btn.addEventListener('click',function(){
  setInterval(() => {
    percentage++;
    h1.innerHTML=percentage+'%';
    inner.style.width=percentage+'%';
  }, 50);
})