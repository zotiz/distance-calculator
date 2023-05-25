//Selector //
const input = document.querySelector('#distanceInput')
const btn = document.querySelector('button')
const result = document.querySelector('.result')
const header = document.querySelector('header')
const subTitle = document.querySelector('.subtitle')

//Default behaviour//
mile_To_kilometer()
//key pressing;
document.addEventListener('keydown', function (e) {
  if (e.code === 'KeyM') {
    input.value = ''
    result.innerText = ''
    // call back function
    mile_To_kilometer()
  } else if (e.code === 'KeyK') {
    input.value = ''
    result.innerText = ''
    // call back function
    kilometer_To_mile()
  }
})
// Mile to Km
function mile_To_kilometer() {
  // Change the heading, Title;
  header.innerHTML = '<h3>MILES TO KILOMETERS CONVERTER</h3>'
  subTitle.innerHTML =
    '<p>Type in a number of miles and click the button to convert the distance to kilometers.</p>'
  input.placeholder = 'mile'
  converter()
}
// Km to mile
function kilometer_To_mile() {
  // Change the heading, Title;
  header.innerHTML = '<h3>KILOMETER TO MILE CONVERTER</h3>'
  subTitle.innerHTML =
    '<p>Type in a number of kilometer and click the button to convert the distance to mile.</p>'
  input.placeholder = 'km'
  converter()
}

// Converter Function
function converter() {
  input.addEventListener('change', function () {
    if (input.placeholder == 'km') {
      const inputValue1 = Number(input.value)
      const mile = (inputValue1 * 0.621371).toFixed(3) + ' mile'
      result.innerText = mile
    } else {
      const inputValue = Number(input.value)
      const km = (inputValue * 1.609344).toFixed(3) + ' Kilometer'
      result.innerText = km
    }
  })
}
