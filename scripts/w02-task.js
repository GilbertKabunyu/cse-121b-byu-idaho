/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Gilbert Kabunyu"
let currentYear = new Date().getFullYear()
let profilePicture = "images/me.jpg.jpg"
let fileName = "profile picture"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imagesElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear
imagesElement.setAttribute('src', profilePicture);
imagesElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
let favFoods = ['sadza', 'vegetables', 'pizza']
foodElement.innerHTML = favFoods
let favFood = 'mango'
favFoods.push(favFood)
foodElement.innerHTML += `<br>${favFoods}`
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`





