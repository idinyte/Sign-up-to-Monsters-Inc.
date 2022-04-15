const aplicantNumber = document.getElementById('random-number');
aplicantNumber.textContent = Math.floor(Math.random() * 899 + 100).toString();

var open = false;
function openDoor() {
    if (!open) {
        door.style.cssText = "cursor: auto; transition-duration: 0.8s;"
            + "transform: rotateY(-90deg);"
            + "transform-origin: left;"
            + "drop-shadow(25px 20px 20px rgba(136, 136, 136, 0.295)) hue-rotate(-10deg);"

        var redBar = document.getElementById("red-bar");
        redBar.style.transitionDuration = "3s";
        redBar.style.transform = "scaleY(7.5)";
        setTimeout(blackout, 3000, redBar, document.getElementById("red-light"));
    }
    open = true;
}

function blackout(redBar, light)
{
    light.style.display = "none";
    redBar.style.transitionDuration = "0s";
    document.getElementById("fieldset").disabled = false;
    decodeURIComponent.getElements
    var doorImages = document.getElementsByClassName("door-img");
    for( const image of doorImages){
        image.style.filter = "brightness(40%)";
    }
    document.getElementById("blackout").style.display = "block";
    aplicantNumber.textContent = "";
    document.getElementById("welcome-text").firstElementChild.textContent = 'Oh wow, you scared him so bad that we had a blackout! You definitely proved yourself. The application is now open.';
}

const door = document.getElementById('open-door');
door.addEventListener('click', openDoor);

//confirm that passwords are matching
function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmpassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

function validateForm() {
    alert("Thank you for submitting the form")
    alert("This project is a part of The Odin Project curriculum and was made for learning purposes by idinyte 2022-04-15. You can find my other projects on github.");
}