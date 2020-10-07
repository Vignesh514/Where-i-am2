//let Firstbuttonclick = true

function timer(){

const hours = new Date().getHours()
const minutes = new Date().getMinutes()
const seconds = new Date().getSeconds()
const realtime = hours + ":" + minutes + ":" + seconds + " IST"
document.getElementById('time').innerHTML = realtime.toString()
      
}

setInterval(timer,1000)

