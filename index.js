let numberOfButtons=document.querySelectorAll(".drum").length;

function play_audio(){
    var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
}

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",play_audio);
}
