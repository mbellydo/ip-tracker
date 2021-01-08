/*
    ----Ipify----
    https://www.ipify.org
    https://geo.ipify.org/docs
    https://geo.ipify.org/api/v1?apiKey=KEY&ipAddress=8.8.8.8
    http://www.cualesmiip.com
    ej.: 192.212.174.101

    ----MAP API----
    ---Leaflet---
    https://leafletjs.com
    https://leafletjs.com/examples/quick-start/
    https://leafletjs.com/reference-1.7.1.html

    https://developers.google.com/maps/api-key-best-practices
    https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/
*/

let button = document.querySelector(".btnSearch");

const ipValue = document.querySelector(".valueIp");
const countryValue = document.querySelector(".valueCountry");
const utcValue = document.querySelector(".valueUtc");
const ispValue = document.querySelector(".valueIsp");

const mapDiv = document.querySelector("#map");

function getInputValue(){
    let ipInput = document.querySelector("#ipaddress").value;
    const key = process.env.api_key;
    const url = 'https://geo.ipify.org/api/v1?apiKey='+key+'&ipAddress=';

    urlUpdated = url + ipInput

    //console.log(ipInput);
    //console.log(urlUpdated);

    fetch(urlUpdated)
        .then(response => response.json())
        .then(response => updateValues(response))
        .then(response => createMap(response))
        .catch(error => console.log(error));
}

function updateValues(response){
    ipValue.innerHTML = response.ip;
    //console.log(response.ip);
    
    countryValue.innerHTML = response.location.country+", "+response.location.region+", "+response.location.city+", "+response.location.postalCode;
    //console.log(response.location.country+", "+response.location.region+", "+response.location.city+", "+response.location.postalCode);
    
    utcValue.innerHTML = "UTC"+response.location.timezone;
    //console.log("UTC"+response.location.timezone);

    ispValue.innerHTML = response.isp;
    //console.log(response.isp);

    createMap(response)
}

function createMap(response) {
    //console.log("lat: " + response.location.lat + ", lng: " + response.location.lng)
    let map = L.map('map').setView([response.location.lat, response.location.lng], 16);
    let myIcon = L.icon({
        iconUrl: '/images/icon-location.svg',
        iconSize: [28,30],
        iconAnchor: [17, 85],
        popupAnchor: [-3, -76]
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([response.location.lat, response.location.lng], {icon: myIcon}).addTo(map)
        .bindPopup('Here I Am!')
        .openPopup();

    /*
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
    */
}