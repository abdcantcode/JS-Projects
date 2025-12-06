let buttonselector=document.querySelector('button');
let boxselector=document.querySelector('#box');

buttonselector.addEventListener('click',function(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  boxselector.style.backgroundColor=`rgb(${r},${g},${b})`
})