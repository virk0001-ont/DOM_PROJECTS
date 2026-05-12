//inner text vs inner html vs text content
//inner text will return the visible text content of an element,
//  while inner html will return the html content of an element 
// and text content will return the text content of an element including the hidden text.
//example



let div1 = document.createElement("div");
div1.innerText = "this is inner text"; // this will set the inner text of the div1 element to "this is inner text"
div1.innerHTML = "<p>this is inner html</p>"; // this will set the inner html of the div1 element to "<p>this is inner html</p>"
div1.textContent = "this is text content"; // this will set the text content of the div1 element to "this is text content"
document.body.appendChild(div1); // this will append the div1 element to the body of the document

//what do u mean by hidden text
//hidden text is the text that is not visible to the user but it is still present in the DOM. 
//for example, if we have an element with display:none, the text inside that element will be hidden but it will still 
// be present in the DOM and it can be accessed using textContent property.

let div2 = document.createElement("div");
div2.style.display = "none";
div2.innerText = "this is hidden text"; // this will set the inner text of the div2 element to "this is hidden text"
document.body.appendChild(div2); // this will append the div2 element to the body of the document

// now if we try to access the innerText of the div2 element, it will return an empty string because the text is hidden
console.log(div2.innerText); // this will return an empty string
// but if we try to access the textContent of the div2 element, it will return "this is hidden text" because the text is still present in the DOM
console.log(div2.textContent); // this will return "this is hidden text"

//so innerText will return an empty string for hidden text, while textContent will return the hidden text.








//learnign in line styling in javascript
//but these are not that important because we usually use css for styling but it is good to know how to do it in javascript as well.

document.body.style.color = "purple"; //text color
document.body.style.backgroundColor = "beige"; //backgruond color
document.body.style.fontSize = "18px";//font size
document.body.style.fontFamilty = "arial";//font family
document.body.style.textAlign = "center";// text align
//adding box around the body
document.body.style.border = "2px solid black";
//how do i round the corners of the box
document.body.style.borderRadius = "10px"
// how do i add some padding to the body
//paddong means the space between the content and the border
document.body.style.padding = "20px";
document.body.style.margin = "20px"; // margin means the space between the element and the other elements
//margin didnt do anything because the body element is the root element and it takes up the entire width of the viewport, 
// so there is no other element to create space between. To see the effect of margin,
//  we can add a child element to the body and apply margin to that element instead.
//  For example:
let newchild = document.createElement("p");
newchild.innerText = "hello kida 22";
document.body.appendChild(newchild);

//we used appendchild not append because append is a newer method 
// and it can take multiple arguments and it can also take strings, 
// while appendchild can only take one argument and it has to be a node.


//adding input field and button to the body
// let NewInput = document.createElement("input");
// NewInput.type = "text";
// NewInput.placeholder ="Kiwe a Singh";
// document.body.appendChild(NewInput);

// let button = document.createElement("button");
// button.innertext = "Ethe Click kro";
// document.body.appendChild(button);
// //adding styling to button and input field
// button.style.padding = "10px 20px"; //why 2 values with px because the first value is for top and bottom padding and the second value is for left and right padding.
// button.style.margin = "10px 20px";//
// //to align it with input field
// button.style.verticalAlign = "middle";

// NewInput.style.padding = "10px 20px";
// NewInput.style.margin = "10px 20px";
// NewInput.style.verticalAlign = "middle";


//enough for styling in javascript, we will learn more about styling in css later on.

//adding input with type password
    

