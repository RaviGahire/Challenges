
const extensionsList = document.querySelector('.extensions-list')
const body = document.querySelector('body');
const darkTheme = document.querySelector('.header_theme')
const Icon = document.querySelector('.header_theme img')

darkTheme.addEventListener('click', (e) => {
  body.classList.toggle('dark-theme')
  if (body.classList.contains('dark-theme')) {

    Icon.src = './assets/images/icon-sun.svg'
  } else {
    Icon.src = './assets/images/icon-moon.svg'
  }


})

fetch('./data.json')
  .then(res => res.json())
  .then((data) => {
    cards(data)
  })

function cards(data) {
  data.forEach(exData => {
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
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
              </div>`
    extensionsList.append(newElement)

  });
}
