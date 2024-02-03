/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let photoElement = document.querySelector('#photo');
let myProfile = {
    name: "Gilbert Kabunyu",
    photo: {
        src: "images/me.jpg.jpg",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        'Sadza',
        'Vegetables',
        'Meat',
        'Fresh chips'
    ],
    hobbies: [
        'football',
        'Web designer',
        'listen to Music'
    ],
    placesLived: []

}


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Zimbabwe",
        length: "27 years",
    }
)
myProfile.placesLived.push(
    {
        place: "South Africa",
        length: "1 year",
    }
)

myProfile.placesLived.push(
    {
        place: "Ghana",
        length: "8 months",
    }
)

myProfile.placesLived.push(
    {
        place: "Liberia",
        length: "1 year, 4 months"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    const newDt = document.createElement('dt')
    newDt.textContent = placesLived.place
    document.getElementById("places-lived").appendChild(newDt)
    const newDd = document.createElement('dd')
    newDd.textContent = placesLived.length
    document.getElementById("places-lived").appendChild(newDd)
});

