// http://swapi.co/api/planets/1/

// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
// starwarsPlanets.send() //this line makes the action
//
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?=2')
// starwarsPlanets.send() //this line makes the action

// function planetListener() {
//     var planets = JSON.parse(this.responseText)
//     // console.log(planets.results)
//     listPlanets(planets.results)
// }

fetch('http://swapi.co/api/planets/')
.then(response => response.json()) //response.json parses the data
.then(response => listPlanets(response.results))

fetch('http://swapi.co/api/planets/1/')
.then(response => response.json()) //response.json parses the data
.then(response => listPlanet(response))
// .then(listPlanets)
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(responseJson) {
    //     listPlanets(responseJson)
    // })


//put everything on the screen

function listPlanets(planetsArray) {
    console.log('This comes after the first one.')
    planetsArray.forEach(function(planet) {
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name
        document.querySelector('body').appendChild(planetTitle)
    })
}

function listPlanet(planet) {
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)
    document.querySelector('body').appendChild(list)
}

// document.querySelector('body').appendChild(list)

console.log('This comes first.')
