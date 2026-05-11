// // ques 1 create a h2 heading element with text - "hello javascript"'append "from Apna college students " to this text using js

// let x = document.querySelector("#myheading");
// x.innerText = "hello javascript";
// x.innerText += " kiwe a"; //
// //why we used += operator because if we use = operator then it will replace the existing text with new text but if we use += operator then it will append the new text to the existing text.



// // ques2 
// // create 3 divs with common class name - "box",access them and add some unique text to each of them,
// let div1 = document.querySelector('.box') 
// //.box will select the first element with class name box but #box will select the element with id box

// div1.innerText ="working";

// //how can i add uniqu text to each of the divs with class name box
// let divs = document.querySelectorAll('.box') // it will select all the elements with class name box and return a node list

// divs[0].innerText = "working better";
// divs[1].innerText = "working best";
// divs[2].innerText = "working excellent";
// //ehde ch appa bss [] naal div select kr lye sequence wise
// //ik hor trika loops use krke v hega




// //ques 3 
// // create a div element and add some text to it and append it to the body of the document

// //// Step 1: Create a div
// // let newDiv = document.createElement("div");

// // // Step 2: Add text inside div
// // newDiv.innerText = "Hello! I am a new div";

// // // Step 3: Append div to body
// // document.body.append(newDiv);


// //using append() method
// let newdiv = document.createElement("div");
// newdiv.innerText = "i was appened using js";
// document.body.append(newdiv);


// //ques4 
// // create a div element and add some text to it and insert it before the h1 element in the body of the document

// let newdiv2 = document.createElement("div");
// newdiv2.innerText = "i was inserted before h1 using js";

// let h1 = document.querySelector("h1");
// document.body.insertBefore(newdiv2, h1);
// // we can use beforebegin and
// // create a div element and add some text to it and insert it after the h1 element in the body of the document
// let newdiv3 = document.createElement("div");
// newdiv3.innerText = "i was inserted after h1 using js";

// let h1element = document.querySelector("h1");
// h1element.insertAdjacentElement("afterend", newdiv3); // afterend will insert the newdiv3 after the h1 element

// //insert before vs adjacent elemetn
// // insert before will insert the new element before the reference element and
// //  adjacent element will insert the new element at the specified position relative to the reference element (beforebegin, afterbegin, beforeend, afterend)









// //beforebegin - goes before the element
// // afterbegin -goes inside the element right after the opening tag
// // beforeend -goes inside the element right before the closing tag
// // afterend- goes after the element

// //solving questions using 



// // (beforebegin, afterbegin, beforeend, afterend)





// // insert before h1 using beforebegin
// let newdiv4 = document.createElement("div");
// newdiv4.innerText = "i was inserted before h1 using beforebegin";

// let h1element2 = document.querySelector("h1");
// h1element2.insertAdjacentElement("beforebegin", newdiv4); // beforebegin will insert the newdiv4 before the h1 element
// //beforeend will insert the new element as the last child of the reference element
// //
// // insert after h1 using afterend






// let newdiv5 = document.createElement("div");
// newdiv5.innerText = "i was inserted after h1 using afterend";

// let h1element3 = document.querySelector("h1");
// h1element3.insertAdjacentElement("afterend", newdiv5); // afterend will insert the newdiv5 after the h1 element 


// // insert after h1 using beforeend
// let newdiv6 = document.createElement("div");
// newdiv6.innerText = "i was inserted after h1 using beforeend";

// let h1element4 = document.querySelector("h1");
// h1element4.insertAdjacentElement("beforeend", newdiv6); // beforeend will insert the newdiv6 as the last child of the h1 element

// // insert before h1 using afterbegin
// let newdiv7 = document.createElement("div");
// newdiv7.innerText = "i was inserted before h1 using afterbegin";






// // lets Learn append()
// // prepend()
// // before()
// // after()
// // insertBefore()
// // append() - it will insert the element as the last child of the parent element
// // prepend() - it will insert the element as the first child of the parent element
// // before() - it will insert the element before the reference element
// // after() - it will insert the element after the reference element
// // insertBefore() - it will insert the element before the reference element





// //prepend() method vs append() method
// let newdiv8 = document.createElement("div");
// newdiv8.innerText = "i was inserted before h1 using prepend";
// document.body.prepend(newdiv8); // it will insert the newdiv8 as the first child of the body element
// document.body.append(newdiv8); // it will insert the newdiv8 as the last child of the body element
// //but here only append is working because we are trying to insert the same element at two different positions 
// // which is not possible, 
// // so only the last position will be considered. 
// // if we want to insert the same element at two different positions
// //  then we need to create two different elements.









//lets learn before() and after() method

let newHeading = document.createElement("h2");
newHeading.innerText = "i am a new heading";
document.body.append(newHeading);
//newHeading.innerText += "i am also a new heading";

let x = document.querySelector("h2");
x.before(newHeading); // it will insert the newHeading before the h2 element
//x.after(newHeading); // it will insert the newHeading after the h2 element