let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function() {

//     alert("别戳我，怕疼");
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla酷毙了\r\n' + name + '!';
}