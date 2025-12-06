let button=document.querySelector('button');
let main=document.querySelector('body');
button.addEventListener('click',function(){
  //initializing random top and left percentages and rotation stuff for the papers to rotate
  let x=Math.floor(Math.random()*95);
  let y=Math.floor(Math.random()*95);
  let rot=Math.floor(Math.random()*360);

  //random r g b stuff
  let r=Math.floor(Math.random()*265);
  let g=Math.floor(Math.random()*265);
  let b=Math.floor(Math.random()*265);
  
  let div=document.createElement('div');
  div.style.height='50px';
  div.style.width='50px';
  div.style.position='absolute';
  div.style.top=x+'%';
  div.style.left=y+'%';
  div.style.rotate=rot+'deg';

  //random colored divs
  div.style.backgroundColor=`rgb(${r},${g},${b})`;

  //actually adding the elements
  main.appendChild(div);

})