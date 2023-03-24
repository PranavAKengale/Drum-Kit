var NumberOfButtons=document.querySelectorAll(".drum").length;


for (var i=0; i<NumberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        buttonInnerhtml=this.innerHTML

        makeSound(buttonInnerhtml);

        buttonAnimation(buttonInnerhtml)
    });
}


document.addEventListener("keydown",function(event){

    makeSound(event.key);

    buttonAnimation(event.key)
})


// Function with switch statements for both click and key
function makeSound(key){

    switch(key) {
        case 'p':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'r':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'a':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'n':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;   
        case 'a':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case 'v':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        default:
            console.log(key)
    }
}


function buttonAnimation(currentKey){
    var keyPressed=document.querySelector("." + currentKey);
    keyPressed.classList.add("pressed");

    setTimeout(function(){


        keyPressed.classList.remove("pressed");
    },100);

}



       