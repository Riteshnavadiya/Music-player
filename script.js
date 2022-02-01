const heading = document.querySelector(".heading");
const name = document.querySelector(".name");
const img = document.querySelector("img");
const audio = document.querySelector("audio");
const next = document.getElementById("forward");
const play = document.getElementById("play");
const back = document.getElementById("backword");

const songs = [
    {
        rname: "richie",
        heading: "sunflower",
        name: "rice rich",
    },
    {
        rname: "richie-2",
        heading: "heading home",
        name: "rich",
    },
    {
        rname: "richie-3",
        heading: "Richie Rich",
        name: "imagine dragons",
    },
];

let curitem = 0;

function current(fav) {
    const iteam = songs[fav];
    heading.textContent = iteam.heading;
    name.textContent = iteam.name;
    audio.src = "audio/" + iteam.rname + ".mp3";
    img.src = "images/" + iteam.rname + ".png";
}

let playmusic1 = false;
function playmusic() {
    playmusic1 = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

function pausemusic() {
    audio.pause();
    playmusic1 = false;
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click", function () {
    if (playmusic1) {
        pausemusic();
    } else {
        playmusic();
    }
});

next.addEventListener("click", function () {

    curitem++;

    if (curitem > songs.length - 1) {
        curitem = 0;
    }
    current(curitem);
});

back.addEventListener("click", function () {
    curitem--;
    if (curitem < 0) {
        curitem = songs.length - 1;
    }
    current(curitem);
});
