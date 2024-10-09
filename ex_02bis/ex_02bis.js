var map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 5,
}).addTo(map);

var schools = [
  { name: "Paris", coords: [48.8566, 2.3522], message: "Paris rocks!" },
  { name: "Lyon", coords: [45.764, 4.8357], message: "Lyon rocks!" },
  { name: "Bordeaux", coords: [44.8378, -0.5792], message: "Bordeaux rocks!" },
  { name: "Nantes", coords: [47.2184, -1.5536], message: "Nantes rocks!" },
  { name: "Toulouse", coords: [43.6045, 1.444], message: "Toulouse rocks!" },
];

schools.forEach(function(school) {
  var icon = L.divIcon({
    html: `
      <div style="text-align: center;">
        <img src="epitech-logo.png" alt="Epitech Logo" style="width: 40px; height: 40px;">
        <div style="font-weight: bold; margin-top: 4px;">${school.name}</div>
      </div>`,
    iconSize: [40, 55],
    className: "custom-icon"
  });

  L.marker(school.coords, { icon: icon })
    .addTo(map)
    .bindPopup(`<b>${school.name}</b><br>${school.message}`);
});

var group = new L.featureGroup(schools.map(school => L.marker(school.coords)));
map.fitBounds(group.getBounds(), { padding: [50, 50] });
