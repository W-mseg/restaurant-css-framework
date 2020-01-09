let mymap = L.map("mapid").setView([50.860956, 4.359829], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',

}).addTo(mymap);

/*L.popup()
  .setLatLng([50.405126, 4.438787])
  .setContent("<p>Hello World</p>")
  .openOn(mymap);*/

var myIcon = L.icon({
  iconUrl: "log.png",
  iconSize: [38, 38],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
L.marker([50.405126, 4.438787], { icon: myIcon }).addTo(mymap);

L.marker([50.63801, 4.613862], { icon: myIcon }).addTo(mymap);

L.marker([50.47153, 4.128336], { icon: myIcon }).addTo(mymap);

L.marker([50.6248, 3.094471], { icon: myIcon }).addTo(mymap);

L.marker([50.481941, 4.855494], { icon: myIcon }).addTo(mymap);

L.marker([51.303110, 3.217333], { icon: myIcon }).addTo(mymap);
