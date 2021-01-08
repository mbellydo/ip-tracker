/*
    ----Ipify----
    https://www.ipify.org
    https://geo.ipify.org/docs
    https://geo.ipify.org/api/v1?apiKey=KEY&ipAddress=8.8.8.8
    
    http://www.cualesmiip.com

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

//const mapDiv = document.querySelector("#map");

function getInputValue(){
    let ipInput = document.querySelector("#ipaddress").value;
    const key = 'at_0iDoj4504blzc9hchqt0E6ogRuCgC';
    const url = 'https://geo.ipify.org/api/v1?apiKey='+key+'&ipAddress=';

    urlUpdated = url + ipInput

    //console.log(ipInput);
    //console.log(urlUpdated);

    fetch(urlUpdated)
        .then(response => response.json())
        .then(response => updateValues(response))
        //.then(response => createMap(response))
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
    let latitude = response.location.lat
    let longitude = response.location.lng
    console.log("lat: " + latitude + ", lng: " + longitude)
    /*
    let map = L.map('map').setView([latitude, longitude], 16);
    let myIcon = L.icon({
        iconUrl: '/images/icon-location.svg',
        iconSize: [28,30],
        iconAnchor: [17, 85],
        popupAnchor: [-3, -76]
    });
    */
    
    /*
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude], {icon: myIcon}).addTo(map)
        .bindPopup('Here I Am!')
        .openPopup();
    */

    /*
    L.tileLayer('https://api.mapbox.com/styles/v1/mbellydo/ckjoa9yng3mlm19oa7kf5o3cs.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibWJlbGx5ZG8iLCJhIjoiY2tqb2E1anFmMGx2djJ2bzhpeDRkdHFyayJ9.DEAvUgh9QjI7vbAWdxHeaw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox://styles/mbellydo/ckjoa9yng3mlm19oa7kf5o3cs',
        //'mapbox/streets-v11'
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    */
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWJlbGx5ZG8iLCJhIjoiY2tqb2E1anFmMGx2djJ2bzhpeDRkdHFyayJ9.DEAvUgh9QjI7vbAWdxHeaw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mbellydo/ckjoa9yng3mlm19oa7kf5o3cs', // stylesheet location
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
    var marker = new mapboxgl.Marker({
        color: "#FFFFFF",
        draggable: true
        }).setLngLat([longitude, latitude])
        .addTo(map);
    map.addControl(new mapboxgl.NavigationControl());
    
    //Add map view styles
    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
    
    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }
}