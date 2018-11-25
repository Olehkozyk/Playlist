;(function(){
    'use-strict'

    var playList = [
    {
        author: "led zeppelin",
        song: "stairway to heaven",
        duration: "7:32",
        audio: "music/stairway to heaven.mp3" 
    },
    {
        author: "queen",
        song: "bohemian rhapsody",
        duration: "5:53",
        audio: "music/bohemian rhapsody.mp3" 
    },
    {
        author: "lynyrd skynyrd",
        song: "free bird",
        duration: "6:14",
        audio: "music/free bird.mp3" 
    },
    {
        author: "deep purple",
        song: "smoke on the water",
        duration: "5:41",
        audio: "music/smoke on the water.mp3" 
    },
    {
        author: "jimi hendrix",
        song: "all along the watchtower",
        duration: "4:01",
        audio: "music/all along the watchtower.mp3" 
    },
    {
        author: "AC/DC",
        song: "back in black",
        duration: "4:15",
        audio: "music/Back In Black.mp3" 
    },
    {
        author: "queen",
        song: "we will rock you",
        duration: "3:54",
        audio: "music/queen_-_we-will-rock-you.mp3"            
    },
    {
        author: "metallica",
        song: "enter sandman",
        duration: "5:32",
        audio: "music/metallica-enter-sandman.mp3"            
    },
    
];
    const playListUl = document.querySelector('.ba-playlist__song');
    const liTmpl = document.getElementById('li-tmpl').innerHTML;

    let songHTML = '';

    playList.forEach(function(song){

        songHTML = liTmpl
        .replace(/{{author}}/ig, song.author)
        .replace(/{{song}}/ig, song.song)
        .replace(/{{duration}}/ig, song.duration)
        .replace(/{{audio}}/ig, song.audio)

        playListUl.innerHTML += songHTML;

    });

})();