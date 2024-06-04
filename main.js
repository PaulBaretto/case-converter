

let body = document.querySelector('body');
let main_wrapper = document.querySelector('.wrapper');
let greeting = document.querySelector('.greeting-header');
let cc_wrapper = document.querySelector('.cc-wrapper');
let clipBoard = document.querySelector('.copyToClipBoard');
let clearBtn = document.querySelector('.clearBtn');
let addNameBtn = document.querySelector('.add-name-btn');
let popupWrapper = document.querySelector('.popup-wrapper');
let closePopupBtn = document.querySelector('.close-popup-btn'); 
let popupBG = document.querySelector('.pop-bg');
let popInput = document.querySelector('input[name="your-name"]');
let valueNonePopup = document.querySelector('.value-none-pop');
let valueNonePopup_error_bg = document.querySelector('.pop-up-value-error')
let textArea = document.querySelector('#textarea');
let error_Btns = document.querySelectorAll('.error-btn')
// let error_Btns = document.querySelector('.error-btn')
let upperCaseBtn = document.querySelector('.upper-case');
let lowerCaseBtn = document.querySelector('.lower-case');
let sentenceCaseBtn = document.querySelector('.sentence-case');
let SlugifyCaseBtn = document.querySelector('.slugify-case');
let remove_hypn = document.querySelectorAll('.remove_hypn-case');


// Event listerners 

error_Btns.forEach(error_Btn => {
    error_Btn.addEventListener('click', value_error_btn_function)
})
// add name btn 
addNameBtn.addEventListener('click', addName)
// clear 
clearBtn.addEventListener('click', clearTextarea);
// copy to board 
clipBoard.addEventListener('click', copyToClipBoard);
// popup close btn 
closePopupBtn.addEventListener('click', shutPopup)
// popup wrapper click outside hide popup function 
popupWrapper.addEventListener('click', (e) => {
    if(e.target === popupBG){
        popupWrapper.classList.remove('popup-clicked');
        console.log('clicked')
    }
})
// popup input labal 
popInput.addEventListener('change', stopLabal)
// lower case
lowerCaseBtn.addEventListener('click', textToLowerCase)
// upper case
upperCaseBtn.addEventListener('click', textToUpperCase);
// Sentence case 
sentenceCaseBtn.addEventListener("click", textToSentenceCase);
// Slugify case 
SlugifyCaseBtn.addEventListener("click", textToSlugCase)
// Remove Hypn
remove_hypn.forEach((each_hypn_remove_btn) => {
    each_hypn_remove_btn.addEventListener("click", textRemoveHypn)
})







// *functions* 
// error btn 
// if textArea value is null 
function value_error_btn_function(){
     if(textArea.value == ''){
        valueNonePopup.classList.add('value-is-none')
        valueNonePopup_error_bg.addEventListener('click', (e) => {
            let error_box = document.querySelector('.value-none-box');
            if(e.target !== error_box){
                valueNonePopup.classList.remove('value-is-none');
            }
        })
        
    } else{
        // alert('Textarea is NULL')
        console.log('not null')
        valueNonePopup.classList.remove('value-is-none')
    };
}
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
    let Uppercase = textArea.value.toUpperCase();
    textArea.value = Uppercase;
}
// Sentence case
function textToSentenceCase(){
    textArea.value = textArea.value[0].toUpperCase() + textArea.value.slice(1).toLowerCase();
}
// Slugify case 
function textToSlugCase(){
    let textarea_val = textArea.value.toLowerCase().trim().split(" ");
    
    textArea.value = textarea_val.join("-");
    // console.log(textarea_val.replace("-", ""));
}
// remove hypn 
function textRemoveHypn(){
    let removeHypn = textArea.value.replace(/-/g, " ");
    textArea.value = removeHypn;
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
            main_wrapper.classList.add('text-copied')
            
        }
        else{
            msg = 'unsuccessful';
            main_wrapper.classList.remove('text-copied')
        }
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    setTimeout(() => {
        main_wrapper.classList.remove('text-copied');
      }, 2900);

}






