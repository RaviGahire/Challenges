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
    country => country.name.toLowerCase().includes(searchValue)
  );

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



function theme (){
 document.body.classList.toggle('dark')

}