// Sets the delay for page loading
const wait = (delay = 0) =>

new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  
).style.display = visible ? 'block' : 'none';

//Sets page class to false
setVisible('.page', false);

//sets loading ID to true
setVisible('#loading', true);

// Renders the page after set delay
document.addEventListener('DOMContentLoaded', () =>
  wait(2000).then(() => {
    setVisible('.page', true);
    setVisible('#loading', false);
}));

// Displays content
const showContent = (jsonImg) => {
    const imageCard = document.getElementById("info")
    imageCard.dataset.id = jsonImg.id
    imageCard.innerHTML = `
    <h3 id="name">${jsonImg.title}</h4>
    <h5 id="date">${jsonImg.date}</h4>
    <p id="explanation">${jsonImg.explanation}</p>
    <img src="${jsonImg.url}" id="image-result" data-id="${jsonImg.id}"/>`

};

// Fetches API data * note: hide api key*
fetch(`https://api.nasa.gov/planetary/apod?api_key=MNtz7xjS3lsMorHNHfMDmmj4cbArEieb6QyiBsy8`)
.then(response => response.json())
.then(showContent);