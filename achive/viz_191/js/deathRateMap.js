var map = L.map("deathRateMap").setView([0.8, 29.5], 8);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets-satellite",
    accessToken:
      "pk.eyJ1Ijoianh1cWVkIiwiYSI6ImNqd3VyZWxqdTAwNzU0YW14aGVmbGlxNnUifQ.bVKTwf3tFUG99uty6cWD7g"
  }
).addTo(map);

// control that shows state info on hover
var info = L.control();

info.onAdd = function(map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function(props) {
  this._div.innerHTML =
    "<h4>DRC Ebola Mortality Rate<br />in North Kivu and Ituri</h4>" +
    (props
      ? "<b>" +
        props.ADM1_VIZ_NAME +
        ", " +
        props.ADM2_VIZ_NAME +
        "</b><br /> Mortality Rate(%): " +
        props.DAILY_NUM.DEATH_RATE +
        "<br />" +
        "Total Cases: " +
        props.DAILY_NUM.TOTAL_CASE +
        "<br />" +
        "Total Deaths: " +
        props.DAILY_NUM.TOTAL_DEATH +
        "<br />" +
        "Date Updated: " +
        props.DAILY_NUM.DATE
      : "Hover over a health zone");
};

info.addTo(map);

// get color depending on population density value
function getColor(d) {
  return d > 100
    ? "#800026"
    : d > 90
    ? "#BD0026"
    : d > 80
    ? "#E31A1C"
    : d > 70
    ? "#FC4E2A"
    : d > 60
    ? "#FD8D3C"
    : d > 50
    ? "#FEB24C"
    : d > 40
    ? "#FED976"
    : "#FFEDA0";
}

function getFillOpacity(d) {
  return d > 0 ? 0.9 : 0;
}

function style(feature) {
  return {
    weight: 1,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: getFillOpacity(feature.properties.DAILY_NUM.DEATH_RATE),
    fillColor: getColor(feature.properties.DAILY_NUM.DEATH_RATE)
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 3,
    //color: "#666",
    dashArray: ""
    //fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

geojson = L.geoJson(healthZone, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [0, 40, 50, 60, 70, 80, 90, 100],
    labels = [],
    from,
    to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' +
        getColor(from + 1) +
        '"></i> ' +
        from +
        "%" +
        (to ? " &ndash; " + to + "%" : "+")
    );
  }

  div.innerHTML = labels.join("<br>");
  return div;
};

legend.addTo(map);
