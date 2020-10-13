
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
                
                if(speed > 2)
                {
                if(heading >= 348.75 && heading <= 33.75)
                {
                    document.getElementById('heading').textContent = "North"
                }
                else
                if(heading >33.75 && heading <= 78.75)
                {
                    document.getElementById('heading').textContent = "NorthEast"
                }
                else
                if(heading >78.75 && heading <= 123.25)
                {
                    document.getElementById('heading').textContent = "East"
                }
                else
                if(heading >123.25 && heading <= 168.75)
                {
                    document.getElementById('heading').textContent = "SouthEast"
                }
                else
                if(heading >168.75 && heading <=213.75)
                {
                    document.getElementById('heading').textContent = "South"
                }
                else
                if(heading >213.75 && heading <=258.75)
                {
                    document.getElementById('heading').textContent = "SouthWest"
                }
                else
                if(heading > 258.75 && heading <=303.75)
                {
                    document.getElementById('heading').textContent = "West"
                }
                else
                if(heading > 303.75 && heading<348.75)
                {
                    document.getElementById('heading').textContent = "NorthWest"
                }
            }
            else
            if(speed<2)
            {
                document.getElementById('heading').textContent = "Not Moving"
            }

            var checked = document.getElementById('km/hr').checked

            document.getElementById('speed').textContent = checked ? speed * 3.6.toFixed(1) : speed.toFixed(1)


});
}

setInterval(getlocation,1000)