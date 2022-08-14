let numberOfButtons = document.querySelectorAll(".drum").length;

function play_sound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log("invalid")
            break;
    }
}

function play_audio_click() {
    var key = this.getInnerHTML();
    play_sound(key);
}

for (let i = 0; i < numberOfButtons; i++) {
    document
        .querySelectorAll(".drum")
    [i].addEventListener("click", play_audio_click);
}

document.addEventListener("keydown",function(event){
    var key=event.key;
    play_sound(key);
});