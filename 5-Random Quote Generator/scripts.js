let button=document.querySelector('button');
let main=document.querySelector('body');

let quotes = [
  "Dreams don’t work unless you do.",
  "Focus on the step, not the whole staircase.",
  "You become what you repeat.",
  "Small progress is still progress.",
  "Your future is created by what you do today.",
  "Be the energy you want to attract.",
  "Doubt kills more dreams than failure ever will.",
  "The comeback is always stronger than the setback.",
  "Every day is a second chance.",
  "Discipline is choosing what you want most.",
  "If it matters to you, you’ll find a way.",
  "One day or day one — you decide.",
  "Your only limit is your mind.",
  "Success is built on consistency.",
  "Do it for the future you.",
  "Stay patient and trust your journey.",
  "You don’t need to be perfect to start.",
  "Work in silence; let success speak.",
  "Great things take time.",
  "Nothing changes if nothing changes."
];


button.addEventListener('click',function(){
  //initializing random top and left percentages and rotation stuff for the papers to rotate
  let x=Math.floor(Math.random()*95);
  let y=Math.floor(Math.random()*95);
  let rot=Math.floor(Math.random()*360);

  //random r g b stuff
  let r=Math.floor(Math.random()*265);
  let g=Math.floor(Math.random()*265);
  let b=Math.floor(Math.random()*265);

  let h1=document.createElement('h1');
  h1.style.height='50px';
  h1.style.width='50px';
  h1.style.position='absolute';
  h1.style.top=x+'%';
  h1.style.left=y+'%';
  h1.style.rotate=rot+'deg';
  h1.innerHTML=''
  //random colored h1s
  h1.style.backgroundColor=`rgb(${r},${g},${b})`;

  //choosing a random quote firstly index

  //actually adding the elements
  main.appendChild();

})