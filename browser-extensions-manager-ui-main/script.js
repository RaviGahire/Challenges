
const extensionsList = document.querySelector('.extensions-list')
const body = document.querySelector('body');
const darkTheme = document.querySelector('.header_theme')
const Icon = document.querySelector('.header_theme img')




// Toggle dark theme on click
// Change the icon based on the theme
darkTheme.addEventListener('click', (e) => {
  body.classList.toggle('dark-theme')
  if (body.classList.contains('dark-theme')) {

    Icon.src = './assets/images/icon-sun.svg'
  } else {
    Icon.src = './assets/images/icon-moon.svg'
  }
  e.stopPropagation()
})


fetch('./data.json')
  .then(res => res.json())
  .then((data) => { cards(data); IsActiveTab(data) })

function cards(data) {
  data.forEach(exData => {
    // console.log(exData.isActive)
    let newElement = document.createElement('div')
    newElement.classList.add('extension-card')
    newElement.innerHTML = `
     <div class="extension-card__header">
          <div class="extension-logo">
            <img src="${exData.logo}" alt="Extension-Icon">
          </div>
          <div class="extension-details">
            <h2>${exData.name}</h2>
            <p>${exData.description}</p>
          </div>
        </div>
        <div class="extension-footer">
          <button class="remove-btn">Remove</button>
                <label class="switch">
              <input id='check-btn' type="checkbox">
              <span class="slider round"></span>
            </label>
              </div>`
    extensionsList.append(newElement)





  });
  // let isActive = null;
  const allEx = document.querySelector('.all-ex')
  // Initially show all extensions Tab
  document.querySelectorAll('.extension-card').forEach(card => {
    allEx.addEventListener('click', (e) => {
      // console.log(card)
      extensionsList.append(card)
    })
  })
  // Add event listener to each remove button,Remove the card when the button is clicked
  const removeBtns = document.querySelectorAll('.remove-btn')
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.extension-card').remove()
    })
  })
}



// Active Tab only 
const checkbox = document.querySelectorAll('check-btn');
function IsActiveTab(data) {



  
  data.forEach((activeData) => {
    if (activeData.isActive === true) {
      console.log(activeData.isActive)
    }



  })




}