/*## Exercises in DOM manipulation.

In this exercise you will be given a already built webside with some styling included. What's special about this website is that it comes in two versions. One which is the "correct" one and one that 
has many "errors" in it. Your task is to correct these errors with the aid of JavaScript. All of the right answers, styling, formatting and texts can be found in the correct version of the site. 
So there is your reference so to speak.

Each question in the following list of questions aims at a specific error on the website, and it goes from top to bottom and left to right on the website.

The solution to all these question can be reached by using the different DOM manipulation methods and properties that you might have or might not have learned during the course. 
Some googling might be required. This link might help you:
https://www.w3schools.com/jsref/dom_obj_all.asp






11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

*/

//1. The logo text of the site has the wrong color. Change it to the correct one.

// let logoTextRef = document.querySelector('logo-text').style.color = ;
// console.log(logoTextRef);

// let logoTextRef = document.querySelector('logo-text').style.color = '#384241';
// console.log(logoTextRef);

document.querySelector(".logo-text").style.color = "#384241";

//2. The alignment of the elements inside the header element are wrong. Change it to the correct one. `Hint`, check the flex properties for the correct alignment. Here is a link that might help:
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

// function myFunction() {
//     const changeAlignment = document.querySelector('header');
//     changeAlignment.forEach(function(item) {
//       item.style.justifyContent = 'flex-start';
//     });
//   }
//   myFunction();

document.querySelector("header").style.justifyContent = "flex-start";

//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

document.querySelector("header").style.borderColor = "white";

//4. The recipe name is wrong, change it to the correct one.

document.querySelector('#recipe-name').innerText = "Frozen Cheescake";

//-5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.


let timerClassRef = document.querySelector('.time-container > span');
timerClassRef.classList.add('material-icons');


//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.


document.querySelector('.time-container > span:last-child').innerText = "60 +min";

//7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. 
//The available images can be found in the assets folder.


let myImageRef = document.querySelector("img");
myImageRef.setAttribute('src', 'assets/frozen-cheesecake-slice.jpg');

//8. The background color of the ingredients list container is wrong. Fix it.

document.querySelector('.ingredients-container').style.backgroundColor = "white";


//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients 
//to the bottom, there is a text instead of two list items. Remove the text and add those two list items.


let recipeTextRef = document.querySelector('.ingredients-container > ul > p');
recipeTextRef.remove();

function changingIngredient() {
    let ulRef = document.querySelector(".ingredients-list-bottom");
    let liRef = document.createElement("li");
    let liRef2 = document.createElement("li");
    liRef.appendChild(document.createTextNode("15st digestivekex"));
    ulRef.appendChild(liRef);
    liRef2.appendChild(document.createTextNode("Lite smör"));
    ulRef.appendChild(liRef2);
}

changingIngredient();

//10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

document.querySelector('.ingredients-list-paste > li:nth-child(3)').innerHTML = "3tsk vaniljsocker";


//11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.


function addingIngredient() {
    let ingredientListRef = document.querySelector('.ingredients-list-paste');
    let newIngredientRef = document.createElement("li");
    // let liRef2 = document.createElement("li");
    newIngredientRef.appendChild(document.createTextNode('400g naturell philadelphiaost'));
    ingredientListRef.appendChild(newIngredientRef);
}
addingIngredient();


//12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

document.querySelector('.instructions.shadow').style.boxShadow = 'none';


//13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

document.querySelector('.instructions-list > li:nth-child(2)').innerHTML = 'Separera äggulor och äggvitor. äggvitorna lägger du i en stor bunke, Äggulorna i en liten bunke.';
document.querySelector('.instructions-list > li:nth-child(9)').innerHTML = 'Ställ in i frysen över natten.';
