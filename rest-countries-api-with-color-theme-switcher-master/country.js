const countryName = new URLSearchParams(location.search).get("name");
const flagImg = document.querySelector(".country-details img");
const countryNameh1 = document.querySelector(".country-details h1");
const NativeName = document.querySelector(".nt-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const conCapital = document.querySelector(".con-capital");
const domain = document.querySelector(".domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const BorderLinks = document.querySelector(".border-country-links");
const backBtn = document.querySelector('.back-btn')

// console.log(countryName);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const country = data.find((contName) => contName.name === countryName);
    if (country) {
      console.log(country);
    } else {
      console.log("Country not found");
    }
    // Looping over the one country and showing data on the webpage
    flagImg.src = country.flags.svg;
    countryNameh1.innerText = country.name;
    if (NativeName) {
      NativeName.innerText = country.nativeName;
    } else {
      NativeName.innerText = country.name;
    }
    population.innerText = country.population;
    region.innerText = country.region;
    subRegion.innerText = country.subregion || "No Sub-Region";
    conCapital.innerText = country.capital || "Capital Less";
    domain.innerText = country.topLevelDomain.join(", ") || ".com";
    currencies.innerText = country.currencies[0].code || "No Currencies ";
    languages.innerText = country.languages[0].name || "No language";

    //Here we find the border country using alphacode === code
    if (country.borders) {
      country.borders.forEach((code) => {
        const borderCountry = data.find((c) => c.alpha3Code === code);
        // console.log(borderCountry ? borderCountry.name : code);
        let countryBor = document.createElement("a");
        countryBor.classList.add("border-anchor");
         countryBor.href =  `/country.html?name=${borderCountry.name}`
        countryBor.innerText = borderCountry ? borderCountry.name : code;
        BorderLinks.append(countryBor);
      });
    }
  })
  .catch(console.error);
