let myHeading = document.querySelector('h1');
let myEmailHeading = document.querySelector('h4');
let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null){
    setUserName()
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName + '!';
  }
}

function setUserEmail() {
  let myEmail = prompt('Please enter your email.');
  if(!myEmail || myEmail === null){
    setUserEmail()
  } else {
    localStorage.setItem('email', myEmail);
    myEmailHeading.textContent = myEmail;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('email')) {
  setUserEmail();
} else {
  let storedEmail = localStorage.getItem('email');
  myEmailHeading.textContent = storedEmail;
}

myButton.onclick = function() {
  setUserName();
  setUserEmail();
}