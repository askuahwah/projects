console.log('Welcome To Console');

let songIndex = 0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName : "Let Me Love You", filePath: "1.mp3",coverPath: "cover.jpg"},
  
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ){
        audioElement.play();
    }
})




