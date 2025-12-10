let p = document.querySelector('p');
let paratext = p.innerHTML;
let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let iteration = 0;


function randombanana() {

  const str = paratext.split('').map((char, index) => {
    if (index < iteration) {
      return char;
    }
    return random.split('')[Math.floor(Math.random() * 52)];
  }).join('');

  p.innerHTML = str;
  iteration += 0.5;

}
p.addEventListener('mouseenter',function(){
  iteration=0;
  setInterval(randombanana, 30);
});


