

let body = document.querySelector('body');
let popInput = document.querySelector('input[name="your-name"]');
let addNameBtn = document.querySelector('.add-name-btn');
let popupWrapper = document.querySelector('.popup-wrapper');
let closePopupBtn = document.querySelector('.close-popup-btn'); 
let popupBG = document.querySelector('.pop-bg');


addNameBtn.addEventListener('click', addName)
console.log(addNameBtn)

closePopupBtn.addEventListener('click', shutPopup)

popupWrapper.addEventListener('click', (e) => {
    if(e.target === popupBG){
        popupWrapper.classList.remove('popup-clicked');
        console.log('clicked')
    }
})


// Add your name ()
function addName(){
    popupWrapper.classList.add('popup-clicked');
}

// close popup ()
function shutPopup(){
    popupWrapper.classList.remove('popup-clicked');
}