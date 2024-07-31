// DOM - MANIPULATION PART 1

/* Use the appropriate methods and properties available to you to get the correct data from the "correct" recipe. All answers should be saved in some variable and logged to the console. If you don't know the right method or property to use, see this link for all available ones: https://www.w3schools.com/jsref/dom_obj_all.asp

*/

//1. What is the name of the recipe

let recipeNameRef = document.getElementById('recipe-name').textContent;
console.log(recipeNameRef);


let recipeNameRef2 = document.querySelector('#recipe-name').textContent;
console.log(recipeNameRef2);

//2. What HTML tag is used to display the Recipe name?

let tagNameRef = document.querySelector('#recipe-name').tagName;
console.log(tagNameRef);

//3. What is the font size of the paragraph tag with the class _"description"_.

let fontSizeRef = document.querySelector('.description');

let fontSizeRefs = window.getComputedStyle(fontSizeRef);
// fontSizeRef.textContent = 
console.log(`${fontSizeRefs.getPropertyValue('font-size')}`);


//4. What is the value of the `alt` atrribute on the image?

let altValueRef = document.querySelector('img').alt;
console.log(altValueRef);

//5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

//URL
let imgUrlRef = document.querySelector('img').src;
console.log(imgUrlRef);


// //Height
let imgHeightRef = document.querySelector('img').offsetHeight;
console.log(imgHeightRef);

//Width
let imgWidthRef = document.querySelector('img').offsetWidth;
console.log(imgWidthRef);


let imgObj = {
url: 'www',
height: 10, 
width: 10
};

imgObj.url = imgUrlRef;
imgObj.height = imgHeightRef;
imgObj.width = imgWidthRef;


console.log(imgObj);


//6. How many ingredients has the paste?

let nmbrOfIngredientsRef = document.querySelector('.ingredients-list-paste').childElementCount;
console.log(nmbrOfIngredientsRef);



//7. Which is the forth element in the list containing the ingredients for the paste?

let fourthElementRef = document.querySelector('.ingredients-list-paste').children[3].innerText;
console.log(fourthElementRef);


//8. Create an array of objects from the instructions. Each element in the array should be an object that looks like this:

let recipeInstructions = [];

let instructionsRef = document.querySelectorAll('.instructions-list > li');
instructionsRef.forEach((element, index) => {
  recipeInstructions.push({order: index+1, text: element.innerText});
});

console.log(recipeInstructions);
