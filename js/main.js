;(function(){
    'use-strict'

    var playList = [
    {
        author: "led zeppelin",
        song: "stairway to heaven",
        duration: "2:03"
    },
    {
        author: "queen",
        song: "bohemian rhapsody",
        duration: "2:30"
    },
    {
        author: "lynyrd skynyrd",
        song: "free bird",
        duration: "1:56"
    },
    {
        author: "deep purple",
        song: "smoke on the water",
        duration: "3:03"
    },
    {
        author: "jimi hendrix",
        song: "all along the watchtower",
        duration: "2:53"
    },
    {
        author: "AC/DC",
        song: "back in black",
        duration: "2:43"
    },
    {
        author: "queen",
        song: "we will rock you",
        duration: "2:13"            
    },
    {
        author: "metallica",
        song: "enter sandman",
        duration: "3:03"            
    }
];
    const playListUl = document.querySelector('.ba-playlist__song');
    const liTmpl = document.getElementById('li-tmpl').innerHTML;

    let songHTML = '';

    playList.forEach(function(song){

        songHTML = liTmpl
        .replace(/{{author}}/ig, song.author)
        .replace(/{{song}}/ig, song.song)
        .replace(/{{duration}}/ig, song.duration)

        playListUl.innerHTML += songHTML;

    });

})();