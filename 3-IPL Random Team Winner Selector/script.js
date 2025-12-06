let buttonselector=document.querySelector('button');
let winner=document.querySelector('h1');
let main=document.querySelector('body');
let body=document.querySelector('#box');
let teams = [
  {
    teamname: 'RCB',
    color: 'red',
    background: 'orange',
  },
  {
    teamname: 'CSK',
    color: 'yellow',
    background: 'blue',
  },
  {
    teamname: 'MI',
    color: 'blue',
    background: 'gold',
  },
  {
    teamname: 'KKR',
    color: 'purple',
    background: 'gold',
  },
  {
    teamname: 'RR',
    color: 'pink',
    background: 'blue',
  },
  {
    teamname: 'SRH',
    color: 'orange',
    background: 'black',
  },
  {
    teamname: 'DC',
    color: 'blue',
    background: 'red',
  },
  {
    teamname: 'PBKS',
    color: 'red',
    background: 'silver',
  },
  {
    teamname: 'GT',
    color: 'navy',
    background: 'gold',
  },
  {
    teamname: 'LSG',
    color: 'skyblue',
    background: 'orange',
  },
];


buttonselector.addEventListener('click',function(){
  let index=Math.floor(Math.random()*teams.length);
  winner.innerHTML=teams[index].teamname;
  body.style.backgroundColor=teams[index].color;
  main.style.backgroundColor=teams[index].background;
})