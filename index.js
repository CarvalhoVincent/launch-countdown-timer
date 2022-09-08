const days = document.getElementById("daysNbr");
const hours = document.getElementById("hoursNbr");
const minutes = document.getElementById("minutesNbr");
const seconds = document.getElementById("secondsNbr");
const daysUp = document.getElementById("daysNbrUp");
const hoursUp = document.getElementById("hoursNbrUp");
const minutesUp = document.getElementById("minutesNbrUp");
const secondsUp = document.getElementById("secondsNbrUp");

const squareUpDays = document.getElementById("squareUpDays");
const squareUpHours = document.getElementById("squareUpHours");
const squareUpMinutes = document.getElementById("squareUpMinutes");
const squareUpSeconds = document.getElementById("squareUpSeconds");

const interval = setInterval(countdown, 1000);
function countdown() {
    let secondsUpdate = seconds.innerHTML;
    let secondsUpdateUp = secondsUp.innerHTML;
    let minutesUpdate = minutes.innerHTML;
    let minutesUpdateUp = minutesUp.innerHTML;
    let hoursUpdate = hours.innerHTML;
    let hoursUpdateUp = hoursUp.innerHTML;
    let daysUpdate = days.innerHTML;
    let daysUpdateUp = daysUp.innerHTML;
    
    secondsUpdate --;
    secondsUpdateUp --;
    seconds.classList.add("flipThis");
     
/* update countdown */

    
    if(secondsUpdate < 10) {
        seconds.innerHTML = "0" + secondsUpdate;
    } else {
        seconds.innerHTML = secondsUpdate;
    }

    if(secondsUpdate < 0) {
        seconds.innerHTML = "59";
        minutesUpdate--;

        if(minutesUpdate < 10) {
            minutes.innerHTML = "0" + minutesUpdate;
        } else {
            minutes.innerHTML = minutesUpdate;
        }
    }

    if(minutesUpdate < 0) {
        minutes.innerHTML = "59";
        hoursUpdate--;

        if(hoursUpdate < 10) {
            hours.innerHTML = "0" + hoursUpdate;
        } else {
            hours.innerHTML = hoursUpdate;
        }
    
        if(hoursUpdate < 0) {
            hours.innerHTML = "23";
            hoursUpdate--;
        }
    }

    if(hoursUpdate < 0) {
        hours.innerHTML = "23";
        daysUpdate--;

        if(daysUpdate < 10) {
            days.innerHTML = "0" + daysUpdate;
        } else {
            days.innerHTML = daysUpdate;
        }
    }

/* update countdown UP */

    if(secondsUpdateUp < 10) {
        secondsUp.innerHTML = "0" + secondsUpdateUp;
    } else {
        secondsUp.innerHTML = secondsUpdateUp;
    }

    if(secondsUpdateUp < 0) {
        secondsUp.innerHTML = "59";
        minutesUpdateUp--;
        
        if(minutesUpdateUp < 10) {
            minutesUp.innerHTML = "0" + minutesUpdateUp;
        } else {
            minutesUp.innerHTML = minutesUpdateUp;
        }
    }

    if(minutesUpdateUp < 0) {
        minutesUp.innerHTML = "59";
        hoursUpdateUp--;

        if(hoursUpdateUp < 10) {
            hoursUp.innerHTML = "0" + hoursUpdateUp;
        } else {
            hoursUp.innerHTML = hoursUpdateUp;
        }
    
        if(hoursUpdateUp < 0) {
            hoursUp.innerHTML = "23";
            hoursUpdateUp--;
        }
    }

    if(hoursUpdateUp < 0) {
        hoursUp.innerHTML = "23";
        daysUpdateUp--;

        if(daysUpdateUp < 10) {
            daysUp.innerHTML = "0" + daysUpdateUp;
        } else {
            daysUp.innerHTML = daysUpdateUp;
        }
    }

}















