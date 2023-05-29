const clockEl = document.getElementById("clock-el")

function digitalClock(){
    const todayTime = new Date()
    let hours = todayTime.getHours()
    let minutes = todayTime.getMinutes()
    let seconds = todayTime.getSeconds()
    if(minutes < 10) {
        clockEl.textContent = `${hours}:0${minutes}:${seconds}`
    }else if(seconds < 10){
        clockEl.textContent = `${hours}:${minutes}:0${seconds}`
    }else{
        clockEl.textContent = `${hours}:${minutes}:${seconds}`
    }
    
    setTimeout(digitalClock, 1000)
}

digitalClock()