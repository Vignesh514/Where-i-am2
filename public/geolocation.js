
        //Geolocation code...
        if('geolocation' in navigator)
        {
            const options ={
                enableHighAccuracy :true
            }
            
            
            const watchID=navigator.geolocation.watchPosition((position,options) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const speed = position.coords.speed
            const heading = position.coords.heading
            const altitude = position.coords.altitude
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            console.log(position)
            console.log(watchID)
            document.getElementById('lat').textContent = lat.toFixed(2)
            document.getElementById('lon').textContent = lon.toFixed(2) 
            document.getElementById('heading').textContent = heading.toFixed(2)
            document.getElementById('altitude').textContent = altitude.toFixed(2)
            
            if(heading === null)
            {
                document.getElementById('heading').textContent = "null"
            }
            else
            {
                document.getElementById('heading').textContent = heading.toFixed(2)
            }
            if(speed === null)
            {
            document.getElementById('speed').textContent = '"Not Moving"'
            }    
            else
            {
                document.getElementById('speed').textContent = speed.toFixed(2)
            }

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

                marker.setLatLng([lat,lon])
                if(First)
                {
                mymap.setView([lat,lon],2)
                First=false;
                }    
       
});

        }

  
