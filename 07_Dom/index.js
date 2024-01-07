// getElementById:

let element = document.getElementById('myElement');

// getElementsByClassName

let elements1 = document.getElementsByClassName('myClass');

// getElementsByTagName

let elements2 = document.getElementsByTagName('p');

// querySelector:  ******

// Selects the first element that matches a specified CSS selector.

let element2 = document.querySelector('#myElement');

// querySelectorAll: #####

let elements4 = document.querySelectorAll('.myClass');

// getElementsByName:

let elements5 = document.getElementsByName('myName');

// Access the parent and child nodes of an element.
let parent = element.parentNode;
let children = element.childNodes; // NodeList


//nextSibling and previousSibling:

//Access the next and previous sibling nodes of an element.

let nextSibling = element.nextSibling;
let prevSibling = element.previousSibling;


// Access the first and last child nodes of an element.

let firstChild = element.firstChild;
let lastChild = element.lastChild;


// Edit and remove Dom elements
