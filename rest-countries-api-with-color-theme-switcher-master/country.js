const countryName = new URLSearchParams(location.search).get('name');

fetch(`./data.json`)