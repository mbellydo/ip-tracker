/*
----Ipify----
https://www.ipify.org
Api key = at_0iDoj4504blzc9hchqt0E6ogRuCgC
https://geo.ipify.org/api/v1?apiKey=at_0iDoj4504blzc9hchqt0E6ogRuCgC&ipAddress=8.8.8.8

----MAP API----
https://leafletjs.com
https://developers.google.com/maps/api-key-best-practices
https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/
*/

/**
 * - coger ip introducida
 * - localizar en el mapa
 * - sustituir valores: ip address, location, timezone, isp
 */

let button = document.querySelector(".btnSearch");

function getInputValue(){
    let ipInput = document.querySelector("#ipaddress").value;
    
    console.log(ipInput);
}

/*(function () {
    const apiurl = "https://geo.ipify.org/api/v1?apiKey=at_0iDoj4504blzc9hchqt0E6ogRuCgC";
    let mymap = undefined;

    function Filldata(data) {
        document.querySelector(".rc-ipaddress .value").innerHTML = data.ip;
        document.querySelector(".rc-location .value").innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
        document.querySelector(".rc-timezone .value").innerHTML = `UTC${data.location.timezone}`;
        document.querySelector(".rc-isp .value").innerHTML = data.isp;

        let coord = [data.location.lat, data.location.lng];

        let mylocationicon = L.icon({
            iconUrl: 'images/icon-location.svg',
            iconSize: [46,56]
        });

        mymap.setView(coord, 13);

        L.marker(coord, { icon: mylocationicon}).addTo(mymap);
    }

    function SearchIp(value) {
        let request = `${apiurl}${process.env.IPIFY_API_KEY}&ipAddress=${value}`;

        fetch(request).then(response => response.json()).then(respo => Filldata(respo));
    }

    function Search() {
        let ipvalue = document.getElementById("ipaddress").value;

        document.getElementById("ipaddress").value = "";

        SearchIp(ipvalue);
    }

    function initialize() {
        document.getElementById("ipaddress").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
               Search();
            }
        });

        document.querySelector(".btnSearch").addEventListener("click", () => Search());

        mymap = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.MAP_BOX_ACCESS_TOKEN
        }).addTo(mymap);

        // SearchIp('192.212.174.101');
    }

    window.onload = initialize;
})()*/

/*Google 
Api key = AIzaSyCfXx3farRYqt51zanUnCQzshOMkejQqY4

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}*/

