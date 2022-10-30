const key = "AIzaSyASmxBCM6k1k30zWbfESMs5xt70LOPe0Ss"

const container = document.getElementById("bodyCards");
const containerTrending = document.getElementById("Trending")
const searchCard = document.getElementById("search")

window.addEventListener("DOMContentLoaded", apiTwo)
searchCard.addEventListener("keyup", api)

const newURL = "https://tenor.googleapis.com/v2/featured?"

function apiTwo(){
    fetch(`${newURL}key=${key}`)
    .then(response => response.json())
    .then(response => response.results.forEach(element => {
        generateapiTwo(element)
        console.log(response);
    }))
}

function generateapiTwo(element){

    const cardTrending = document.createElement('div')
    cardTrending.classList.add('cardTrending')

    const imgTrending = document.createElement('img')
    imgTrending.classList.add('imgTrending')
    imgTrending.src = element.media_formats.gif.url

    const nameTrending = document.createElement('p')
    nameTrending.classList.add('nameTrending')

    containerTrending.appendChild(cardTrending)
    cardTrending.appendChild(imgTrending)
    cardTrending.appendChild(nameTrending)
}

const URL = "https://tenor.googleapis.com/v2/search?"

function api(event){
    fetch(`${URL}q=${event.target.value}&key=${key}`)
    .then(response => response.json())
    .then(response => response.results.forEach(element => {
        generateapi(element)
        console.log(element.media_formats.gif.url);
    }))
    if (event.target.value === '') {
        location.reload()
    }
}

function generateapi(element){

    const card = document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.classList.add('imgCard')
    imgCard.src = element.media_formats.gif.url

    container.appendChild(card)
    card.appendChild(imgCard)
}