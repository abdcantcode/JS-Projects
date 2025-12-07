let arr = [
  {
    "name": "Tony Sparx",
    "profession": "Dog Walker",
    "image": "https://i.pravatar.cc/150?img=10",
    "description": "Walks dogs while juggling treats and loudly singing pop songs."
  },
  {
    "name": "Lisa Bumble",
    "profession": "Cake Designer",
    "image": "https://i.pravatar.cc/150?img=20",
    "description": "Accidentally sparkles cakes with glitter — chaos and joy ensue."
  },
  {
    "name": "Max Thunder",
    "profession": "Taxi Driver",
    "image": "https://i.pravatar.cc/150?img=30",
    "description": "Drives like a snail, talks like motivational speaker for lamps."
  },
  {
    "name": "Jenny Rocket",
    "profession": "Graphic Artist",
    "image": "https://i.pravatar.cc/150?img=40",
    "description": "Draws cats wearing suits — clients somehow always approve enthusiastically."
  },
  {
    "name": "Oscar Plume",
    "profession": "Bartender",
    "image": "https://i.pravatar.cc/150?img=50",
    "description": "Mixes mocktails accidentally tasting like grandma’s secret soup recipe."
  },
  {
    "name": "Mona Drift",
    "profession": "Yoga Instructor",
    "image": "https://i.pravatar.cc/150?img=60",
    "description": "Demonstrates poses upside‑down — students gasp, then giggle apreciatively."
  },
  {
    "name": "Ricky Maple",
    "profession": "Gardener",
    "image": "https://i.pravatar.cc/150?img=70",
    "description": "Watered plants with soda once — leaves are now dancing joyfully."
  },
  {
    "name": "Nina Crisp",
    "profession": "Barista",
    "image": "https://i.pravatar.cc/150?img=15",
    "description": "Serves coffee with dramatic flair — latte art always looks like squirrels."
  },
  {
    "name": "Garry Pixel",
    "profession": "Software Tester",
    "image": "https://i.pravatar.cc/150?img=25",
    "description": "Finds bugs everywhere — even in cartoons and morning cereal bowls."
  },
  {
    "name": "Bella Frost",
    "profession": "Ice Sculptor",
    "image": "https://i.pravatar.cc/150?img=35",
    "description": "Sculpts penguins sipping tea — ice melts, penguins leave unimpressed."
  }
];



let body=document.querySelector('body');

sum='';
arr.forEach(function(val){
  sum=sum+`<div class="card">
    <img src="${val.image}" alt="">
    <h3>${val.name}</h3>
    <h4>${val.profession}</h4>
    <p>${val.description}</p>
  </div>
  `;
  
})
body.innerHTML=sum;
