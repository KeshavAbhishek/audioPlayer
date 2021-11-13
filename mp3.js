var pause = 0;
function pasueunpauseSong(){
    if(pause==1){
        document.getElementById('playpausebutton').setAttribute('src','play.png');
        pause=0;
    }
    else if(pause==0){
        document.getElementById('playpausebutton').setAttribute('src','pause.png');
        pause=1;
    };
};

function playme(){
    var song=document.getElementById('audioPlayerControlsBar');
    // song.setAttribute('src',document.getElementById('addSongOpenFile').files[0].name);
    song.setAttribute('src','https://keshavabhishek.github.io/audioPlayer/E1.mp3');
};

function selectSong_and_Play(){
    var openfile = document.getElementById('addSongOpenFile').click();
};

document.getElementById('addSongOpenFile').addEventListener('change',()=>{
    if(document.getElementById('addSongOpenFile').files[0].name!=''){
        playme();
    }
});

document.getElementById('loadSong').addEventListener('mousedown',()=>{
    document.getElementById('loadSong').style.transform='translateX(0.15em)';
    document.getElementById('loadSong').style.transform='translateY(0.15em)';
    document.getElementById('loadSong').style.boxShadow='none';
});

document.getElementById('loadSong').addEventListener('mouseup',()=>{
    document.getElementById('loadSong').style.transform='translateX(-0.15em)';
    document.getElementById('loadSong').style.transform='translateY(-0.15em)';
    document.getElementById('loadSong').style.boxShadow='0.15em 0.15em 0em #000';
});