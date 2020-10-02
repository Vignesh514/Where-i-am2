//BatteryStatus code...
async function BatteryStatus(){
    if('getBattery'in navigator )
{
    navigator.getBattery().then(function(battery){
      //  console.log(battery.level)
      const batterylevel = battery.level*100
      
      document.getElementById('batterylevel').textContent = batterylevel.toFixed(0)    
      
      document.getElementById('charging').textContent = battery.charging ? "Yes" : "No"
         })
}


}

setInterval(BatteryStatus,1000)
