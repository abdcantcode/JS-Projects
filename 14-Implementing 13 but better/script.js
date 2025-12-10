const reels = [
  {
    isLiked: false,
    likeCount: 1245,
    commentCount: 87,
    shareCount: 34,
    accName: "urban.explorer",
    caption: "Night vibes in the city 🌃",
    dp: "https://i.pravatar.cc/150?img=1",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/7677746/"
  },
  {
    isLiked: true,
    likeCount: 8921,
    commentCount: 331,
    shareCount: 120,
    accName: "fitnesswithmaya",
    caption: "No excuses, just results 💪🔥",
    dp: "https://i.pravatar.cc/150?img=2",
    isFollowed: true,
    videoLink: "https://www.pexels.com/download/video/6872480/"
  },
  {
    isLiked: false,
    likeCount: 456,
    commentCount: 19,
    shareCount: 6,
    accName: "chef.antonio",
    caption: "Fresh homemade pasta 🤌",
    dp: "https://i.pravatar.cc/150?img=3",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/31463615/"
  },
  {
    isLiked: false,
    likeCount: 10432,
    commentCount: 542,
    shareCount: 203,
    accName: "travel_duniya",
    caption: "Sunset at Bali 🏝️",
    dp: "https://i.pravatar.cc/150?img=4",
    isFollowed: true,
    videoLink: "https://www.pexels.com/download/video/5320209/"
  },
  {
    isLiked: true,
    likeCount: 785,
    commentCount: 55,
    shareCount: 10,
    accName: "techmaster",
    caption: "This gadget is insane 🤯",
    dp: "https://i.pravatar.cc/150?img=5",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/6924608/"
  },
  {
    isLiked: false,
    likeCount: 918,
    commentCount: 40,
    shareCount: 21,
    accName: "petlove",
    caption: "Cutest puppy ever 🐶❤️",
    dp: "https://i.pravatar.cc/150?img=6",
    isFollowed: true,
    videoLink: "https://www.pexels.com/download/video/3226454/"
  },
  {
    isLiked: true,
    likeCount: 15432,
    commentCount: 692,
    shareCount: 325,
    accName: "danceflow",
    caption: "Try this choreo 🔥",
    dp: "https://i.pravatar.cc/150?img=7",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/4603812/"
  },
  {
    isLiked: false,
    likeCount: 332,
    commentCount: 12,
    shareCount: 3,
    accName: "codingjunkie",
    caption: "Stop writing messy JS 😭",
    dp: "https://i.pravatar.cc/150?img=8",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/5435284/"
  },
  {
    isLiked: false,
    likeCount: 21451,
    commentCount: 1011,
    shareCount: 455,
    accName: "luxury.lens",
    caption: "This car… unreal 🤤",
    dp: "https://i.pravatar.cc/150?img=9",
    isFollowed: true,
    videoLink: "https://www.pexels.com/download/video/3538273/"
  },
  {
    isLiked: true,
    likeCount: 1533,
    commentCount: 66,
    shareCount: 28,
    accName: "nature_earth",
    caption: "Peaceful mornings 🌿",
    dp: "https://i.pravatar.cc/150?img=10",
    isFollowed: false,
    videoLink: "https://www.pexels.com/download/video/6865614/"
  }
];
let allreels=document.querySelector('.all-reels');
function addData(){
  
let sum='';

reels.forEach(function(elem,idx){
  sum=sum+`<div class="reel" >
          <video src="${elem.videoLink}" autoplay loop muted></video>
          <div class="bottom">
            <div class="prof">
              <img
                src="${elem.dp}"
                alt="">
              <h4>${elem.accName}</h4>
              <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div>
            <div class="caption">
              <h4>${elem.caption}</h4>
            </div>
          </div>
          <div class="side">
            <div class="heart" id=${idx}>
              <h4>${elem.isLiked?'<i class="ri-heart-fill" ></i>':'<i class="ri-heart-line"></i>'}</i></h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="shares">
              <h4><i class="ri-share-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="settings">
              <h4><i class="ri-more-2-fill"></i></h4>

            </div>
          </div>
        </div>`;
})
allreels.innerHTML=sum;
}
addData();
 
allreels.addEventListener('click',function(dets){
  console.log(dets.target.id);

})