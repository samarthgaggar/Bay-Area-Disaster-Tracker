// Initialize the map
const map = L.map('map').setView([37.7749, -122.4194], 10); // Centered on San Francisco

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example GeoJSON data
const affectedAreas = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "status": "affected", "name": "Area 1" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-122.5, 37.8],
                        [-122.4, 37.8],
                        [-122.4, 37.7],
                        [-122.5, 37.7],
                        [-122.5, 37.8]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "status": "safe", "name": "Area 2" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-122.3, 37.8],
                        [-122.2, 37.8],
                        [-122.2, 37.7],
                        [-122.3, 37.7],
                        [-122.3, 37.8]
                    ]
                ]
            }
        }
    ]
};

// Function to style areas
function styleFeature(feature) {
    return {
        fillColor: feature.properties.status === 'affected' ? 'red' : 'green',
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

// Add GeoJSON to the map
L.geoJSON(affectedAreas, {
    style: styleFeature,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>${feature.properties.name}</b><br>Status: ${feature.properties.status}`);
    }
}).addTo(map);