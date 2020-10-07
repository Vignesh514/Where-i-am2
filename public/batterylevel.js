//BatteryStatus code...
async function BatteryStatus(){
    if('getBattery'in navigator )
{
    navigator.getBattery().then(function(battery){
      //  console.log(battery.level)
      const batterylevel = battery.level*100
        
     var batcolor = batterylevel.toString()
      if(batcolor < 25)
      {
     document.getElementById('batterylevel').innerHTML = batcolor.fontcolor("red")    
      }
      else
      if(batcolor >=25 && batcolor < 65)
      {
        document.getElementById('batterylevel').innerHTML = batcolor.fontcolor("orange")
      }
      else
      
      {
        document.getElementById('batterylevel').innerHTML = batcolor.fontcolor("green")
      } 
      if(batcolor < 10 && battery.charging === false)
      {
        alert("Charge your Battery")
      }

      if(battery.charging === true)
      {
        var value = "Yes"
        var color = value.fontcolor("green")
      }
      else
      {
        var value = "No"
        var color = value.fontcolor("red")
      }
      document.getElementById('charging').innerHTML = battery.charging ? color : color
         })
}


}

setInterval(BatteryStatus,500)
