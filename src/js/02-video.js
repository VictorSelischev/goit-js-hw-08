import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// console.log(player);

let playerLocalStorage = {};

player.on('play', function () {
    console.log(timeupdate);
    console.log('played the video!');

        const currentTime = timeupdate.seconds;
    console.log(currentTime);

    localStorage.setItem("videoplayer-current-time", "What the fack");
    const vcT = localStorage.getItem("videoplayer-current-time");

    console.log(vcT);
    // localStorage.removeItem("videoplayer-current-time");
});










player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
