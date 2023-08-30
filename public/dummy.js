
// Wanted to start my map at Las Vegas so I can map out some coffee shops in the area.
// This creates the base of the map
let map = {
    coordinates: {},
    businesses: {},
    map: {},
    markers: {},

    buildMap() {
      this.map = L.map('map', {
        center: this.coordinates,
        zoom: 11,
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: '19',
      }).addTo(this.map);
      //Creating geolocation marker
      const marker = L.marker(this.coordinates)
      marker
      .addTo(this.map)
      .bindPopup('<p1><b>You are here</b><br></p1>')
      .openPopup()
    },
    
    addMarkers() {
      for(let i=0; i < this.businesses.length; i++) {
        this.markers = L.marker([
          this.businesses[i].lat,
          this.businesses[i].long,
        ])
            .bindPopup(`<p1>${this.businesses[i].name}</p1>`)
      }
    },
      
      
      
      
};  

// The added TileLayer gives me the opportunity to credit Leaflet while also giving me access to the actual map feature to see the content of the map.

//Testing Foursquare API call for Coffee Shops in Vegas Area
// async function placeSearch() {
//     try {
//         const searchParams = new URLSearchParams({
//           query: 'coffee',
//           ll: '36.1699,-115.1398',
//           sort: 'DISTANCE',
//           client_id: '0O41TSCGJQFKPHHCOVLJRFA4N0NMNATH3HR5MD3ZXREY5LPG',
//           client_secret: 'ZXQ2UYPGER3MQMD3TSHCGLSVMPDDDXESWTVUL3CGRVE3WPYW'
//         });
//         const results = await fetch(
//           `https://api.foursquare.com/v3/places/search?${searchParams}`,
//           {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               Authorization: 'fsq3qu5vJNtVdRAimjyqbc54lfVTDKFDz+AYOWbnp7yA6Is=',
//             }
//           }
//         );
//         const data = await results.json();
//         console.log(data);
//         return data
//     } catch (err) {
//         console.error(err);
//     }


