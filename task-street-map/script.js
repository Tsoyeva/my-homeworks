const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker;

async function searchLocation() {
  const searchInput = document.getElementById('searchInput').value;
  const resultsDiv = document.getElementById('results');

  if (!searchInput) {
    resultsDiv.innerHTML = '<p>Please enter a location to search.</p>';
    return;
  }

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput)}&limit=1`);
    const data = await response.json();

    if (data.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
    }

    const location = data[0];
    const lat = parseFloat(location.lat);
    const lon = parseFloat(location.lon);

    if (marker) {
      map.removeLayer(marker);
    }

    marker = L.marker([lat, lon]).addTo(map);

    map.setView([lat, lon], 13);

    resultsDiv.innerHTML = `
      <h3>Location Details:</h3>
      <p><strong>Name:</strong> ${location.display_name}</p>
      <p><strong>Latitude:</strong> ${lat}</p>
      <p><strong>Longitude:</strong> ${lon}</p>
      <p><strong>Type:</strong> ${location.type}</p>
    `;
  } catch (error) {
    resultsDiv.innerHTML = '<p>Error searching for location. Please try again.</p>';
    console.error('Error:', error);
  }
}


document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchLocation();
  }
});