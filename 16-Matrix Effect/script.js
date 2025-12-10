let p=document.querySelector('p');
let paratext=p.innerHTML;
let random='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
 
function randombanana(){
  setInterval(()=>{
  const str=paratext.split('').map(()=>{
  return random.split('')[Math.floor(Math.random()*52)]
}).join('')

// console.log(str);
},30);
}


