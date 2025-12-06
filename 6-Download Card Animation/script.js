let btn = document.querySelector('button');
let percentage = 0;
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner');


btn.addEventListener('click', function () {
  let time=20+(Math.floor(Math.random()*50));
  btn.style.pointerEvents='none';
  alert(`Your file will be downloaded in ${time/10} seconds.`);
  let perc = setInterval(() => {
    percentage++;
    h1.innerHTML = percentage + '%';
    inner.style.width = percentage + '%';
  }, time);

  setTimeout(function () {
    clearInterval(perc);
    btn.innerHTML='Downloaded!';
    btn.style.opacity=0.5;
    
  }, time*100);
});
