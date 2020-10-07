
             //Making a Map and Tiles
             const mymap = L.map('issMap').setView([0,0], 1);
             const attribution = 
                     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
             const tileurl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
     
             const tiles = L.tileLayer(tileurl,{attribution});
             tiles.addTo(mymap)
                 //Making a Marker with custom Icon
            
             const marker = L.marker([0, 0]).addTo(mymap);
             

             let First = true; 
        //Geolocation code...
          function  getlocation(){    
            
            navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const speed = position.coords.speed
            const heading = position.coords.heading
            const altitude = position.coords.altitude
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            console.log(position)
           // console.log(position.timestamp)
          //  console.log(watchID)
          
                //setting Lat,lon in map
                if(First)
                {
                L.circle([lat,lon], {radius: 25,color:'green'}).addTo(mymap);    
                marker.setLatLng([lat,lon])
                marker.bindPopup("You are now Here").openPopup();
                mymap.setView([lat,lon],20)
                First=false;
                }    
                


                document.getElementById('lat').textContent = lat.toFixed(2)
                document.getElementById('lon').textContent = lon.toFixed(2) 
                //document.getElementById('heading').textContent = heading.toFixed(2)
                document.getElementById('altitude').textContent = altitude.toFixed(2) 
                
                if(heading >= 348.75 && heading <= 11.25)
                {
                    document.getElementById('heading').textContent = "North"
                }
                else
                if(heading >11.25 && heading <= 56.25)
                {
                    document.getElementById('heading').textContent = "NorthEast"
                }
                else
                if(heading >56.25 && heading <= 101.25)
                {
                    document.getElementById('heading').textContent = "East"
                }
                else
                {
                    document.getElementById('heading').textContent = heading.toFixed(2)
                }
                var speedperkm = speed * 3.6
                document.getElementById('speed').textContent = speedperkm.toFixed(2)
                
          
    

});
}

setInterval(getlocation,1000)