const countryContainer = document.querySelector(".countries-container");
const filterBar = document.querySelector(".filter-bar");

const searchInput = document.querySelector('.search-input')

let allCountriesData 

// on input search
fetch("./data.json")
  .then((res) => res.json())
  .then((data)=>{
    renderCountrise(data)
    allCountriesData = data})
    .catch(console.error);
    
// by-default-render
fetch("./data.json")
  .then((res) => res.json())
  .then(renderCountrise);

  
filterBar.addEventListener("change", () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      countryContainer.innerHTML = "";

      data.forEach((country) => {
        const countryCards = document.createElement("a");
        countryCards.href = `/country.html?name=${country.name}`;

        countryCards.classList.add("country-card");
        countryCards.innerHTML = `
                    <img src="${country.flags.svg}" alt="flag">
                    <div class="card-text">
                    <h3 class="card-title">${country.name}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString(
                      "en-IN"
                    )}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital || "Capital Less"}</p>
                    </div>`;

        if (country.region === filterBar.value) {
          country.region = countryContainer.append(countryCards);
        }
      });
    });
});


searchInput.addEventListener('input',(e)=>{
const searchValue = e.target.value
 const filteredData = allCountriesData.filter(
    country => country.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filteredData)

renderCountrise(filteredData)

})



// 
function renderCountrise(data) {
  countryContainer.innerHTML = "";
  data.forEach((country) => {
    const countryCards = document.createElement("a");
    countryCards.href = `/country.html?name=${country.name}`;
    countryCards.classList.add("country-card");
    countryCards.innerHTML = `
                      <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">${country.name}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString(
                      "en-IN"
                    )}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital || "Capital Less"}</p>
                   
                </div>
               `;
    countryContainer.append(countryCards);
  });
}



const themeIcon = document.querySelector('.theme')
const body = document.querySelector('body')

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeIcon.innerHTML = `<i class="fa-regular fa-moon"></i> Dark`;
} else {
  themeIcon.innerHTML = `<i class="fa-regular fa-sun"></i> Light`;
}

themeIcon.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeIcon.innerHTML = `<i class="fa-regular fa-moon"></i> Dark`;
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.innerHTML = `<i class="fa-regular fa-sun"></i> Light`;
    localStorage.setItem("theme", "light");
  }
});



