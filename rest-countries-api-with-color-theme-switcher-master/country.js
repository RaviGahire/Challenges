const countryName = new URLSearchParams(location.search).get("name");

console.log(countryName);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const country = data.find((conName) => conName.name === countryName);
    if (country) {
      console.log(country);
    } else {
      console.log("Country not found");
    }
  })
  .catch(console.error);
