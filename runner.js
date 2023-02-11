const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImZjZDI2MzUwLWY0M2YtNDE0Yy1hNmUyLWNkYjNjZTZmMjljMi0xNjc2MTMzMzYzNzQ2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMGQzNWFhODQtNmFkNy00NzhkLWE5NGEtMDFlZTIzYWE0ZTExIiwidHlwZSI6InQifQ.Yjsvk-SN6n_kAHWibCsxtAASjcE625IeagPBB4X_G3g'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
