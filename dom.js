// ques 1 create a h2 heading element with text - "hello javascript"'append "from Apna college students " to this text using js

let x = document.querySelector("#myheading");
x.innerText = "hello javascript";
x.innerText += " kiwe a"; //
//why we used += operator because if we use = operator then it will replace the existing text with new text but if we use += operator then it will append the new text to the existing text.



// ques2 
// create 3 divs with common class name - "box",access them and add some unique text to each of them,
let div1 = document.querySelector('.box') 
//.box will select the first element with class name box but #box will select the element with id box

div1.innerText ="working";

//how can i add uniqu text to each of the divs with class name box
let divs = document.querySelectorAll('.box') // it will select all the elements with class name box and return a node list

divs[0].innerText = "working better";
divs[1].innerText = "working best";
divs[2].innerText = "working excellent";
//ehde ch appa bss [] naal div select kr lye sequence wise
//ik hor trika loops use krke v hega




//ques 3 
// create a div element and add some text to it and append it to the body of the document


//ques4 
// create a div element and add some text to it and insert it before the h1 element in the body of the document


//ques5 
// create a div element and add some text to it and insert it after the h1 element in the body of the document