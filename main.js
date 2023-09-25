

let body = document.querySelector('body');
let greeting = document.querySelector('.greeting-header');
let cc_wrapper = document.querySelector('.cc-wrapper');
let textArea = document.querySelector('#textarea');
let upperCaseBtn = document.querySelector('.upper-case');
let lowerCaseBtn = document.querySelector('.lower-case');
let clipBoard = document.querySelector('.copyToClipBoard');
let clearBtn = document.querySelector('.clearBtn');
let addNameBtn = document.querySelector('.add-name-btn');
let popupWrapper = document.querySelector('.popup-wrapper');
let closePopupBtn = document.querySelector('.close-popup-btn'); 
let popupBG = document.querySelector('.pop-bg');
let popInput = document.querySelector('input[name="your-name"]');
let valueNonePopup = document.querySelector('.value-none-pop');
let valueNonePopup_error_bg = document.querySelector('.pop-up-value-error')

addNameBtn.addEventListener('click', addName)

closePopupBtn.addEventListener('click', shutPopup)

popupWrapper.addEventListener('click', (e) => {
    if(e.target === popupBG){
        popupWrapper.classList.remove('popup-clicked');
        console.log('clicked')
    }
})

popInput.addEventListener('change', stopLabal)

// clear 
clearBtn.addEventListener('click', clearTextarea);

// lower case
lowerCaseBtn.addEventListener('click', textToLowerCase)
// upper case
upperCaseBtn.addEventListener('click', textToUpperCase)

clipBoard.addEventListener('click', copyToClipBoard)
console.log(clipBoard) 








// *functions* 
// Add your name ()
function addName(){
    popupWrapper.classList.add('popup-clicked');
}
// close popup ()
function shutPopup(){
    popupWrapper.classList.remove('popup-clicked');
}

// stop labal on top if it contains value 
function stopLabal(){
    if(popInput.value !== ''){
        console.log('clink')
        popInput.nextElementSibling.classList.add('input-clicked')
    } else{
        popInput.nextElementSibling.classList.remove('input-clicked')
    }
}

// clear textarea 
function clearTextarea(){
    textArea.value = "";
}

// lower case
function textToLowerCase(){
    let lowercase = textArea.value.toLowerCase();
    textArea.value = lowercase;
}
// upper case
function textToUpperCase(){
    let Uowercase = textArea.value.toUpperCase();
    textArea.value = Uowercase;
}



// copy 
function copyToClipBoard(){
    // document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        // var msg = successful ? 'successful' : 'unsuccessful';
        let msg;
        if(successful){
            msg = "successful";
            cc_wrapper.classList.add('text-copied')
        }
        else{
            msg = 'unsuccessful';
            cc_wrapper.classList.remove('text-copied')
        }
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    // if textArea value is null 
    if(textArea.value == ''){
        console.log('textarea is Null')
        // alert('Textarea is NULL')
        valueNonePopup.classList.add('value-is-none')
        valueNonePopup_error_bg.addEventListener('click', (e) => {
            let error_box = document.querySelector('.value-none-box');
            if(e.target !== error_box){
                valueNonePopup.classList.remove('value-is-none');
                console.log('click')
            }
        })
        
    } else{
        // alert('Textarea is NULL')
        console.log('not null')
        valueNonePopup.classList.remove('value-is-none')
    };
}
// error value function 
function shut_error_popup(){
    valueNonePopup.classList.remove('value-is-none')
}



// Cookie code start

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function checkCookie(){
//    popInput
// }