//let Firstbuttonclick = true

function timer(){
var time = new Date().getTime()
    var date = new Date(time)
    document.getElementById('time').innerHTML = date.toString()
      
}

setInterval(timer,1000)

