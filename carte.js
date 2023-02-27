var map = L.map('map').setView([46.353321, -1.014821], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.353321, -1.014821]).addTo(map);

marker.bindPopup("<b>Les Marais Poitevin</b><br>").openPopup();
