

let body = document.querySelector('body');
let main_wrapper = document.querySelector('.wrapper');
let greeting = document.querySelector('.greeting-header');
let cc_wrapper = document.querySelector('.cc-wrapper');
let pasteText = document.querySelector('.paste');
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
let capitalizedCaseBtn = document.querySelector('.capitalized-case');


// Event listerners 

error_Btns.forEach(error_Btn => {
    error_Btn.addEventListener('click', value_error_btn_function)
})
// add name btn 
addNameBtn.addEventListener('click', addName)
// clear 
//paste text
pasteText.addEventListener("click", textPaste)
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
// Remove Hypn
remove_hypn.forEach((each_hypn_remove_btn) => {
    each_hypn_remove_btn.addEventListener("click", textRemoveHypn)
})
// lower case
lowerCaseBtn.addEventListener('click', textToLowerCase)
// upper case
upperCaseBtn.addEventListener('click', textToUpperCase);
// Sentence case 
sentenceCaseBtn.addEventListener("click", textToSentenceCase);
// Slugify case 
SlugifyCaseBtn.addEventListener("click", textToSlugCase)
// Capitalized case 
capitalizedCaseBtn.addEventListener("click", textToCapitalizedCase)







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
// copy 
function copyToClipBoard(){
    // document.body.apgitpendChild(textArea);
    if(textArea.value === ""){
        // console.log("Textarea is empty ('')");
    }else{
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

}
// paste text 
async function textPaste(e){

    try {
        // Read text from the clipboard
        const clipText = await navigator.clipboard.readText();
        
        // Insert the clipboard text into the textarea
        textArea.value = clipText;
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }

    // let paste_text = (e.clipboardData || window.clipboardData).getData('text');
    
    // textArea.value = paste_text;
    // e.preventDefault();
    
    // let paste_text = (e.clipboardData || window.clipboardDate).getDate("text")
    // let paste_text = (e.clipboardData || window.clipboardData).getData('text');
    
    // textArea.value = paste_text;
    // e.preventDefault();


    // navigator.clipboard.readText().then((clipText) => (textArea.value = clipText));
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
    // function replaceStuff(str) {
    //     const replacements = {
    //         ";": "",
    //         // ".": "",
    //         ",": ""
    //         // Add more replacements as needed
    //     };
    //     return str.replace(new RegExp(Object.keys(replacements).join("|"), "g"), function(matched) {
    //         return replacements[matched];
    //     });
    // }
    // console.log(replaceStuff);
    let textarea_val = textArea.value.toLowerCase().trim().split(" ");
    textArea.value = textarea_val.join("-");
}
// Capitalized Case
function textToCapitalizedCase(){
    let textarea_val = textArea.value.trim().split(" ");
    console.log(textarea_val);
    let to_capital_lower_case = textarea_val.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase());
    const result = to_capital_lower_case.join(' ');
    textArea.value = result;
    // textarea_val.forEach((each_textArea_val) => {
    //     // textArea.value = each_textArea_val[0].toUpperCase() + each_textArea_val.slice(1).toLowerCase();
    //     // textarea_val.value = each_textArea_val[0].toUpperCase() + each_textArea_val.slice(1).toLowerCase();
    //     console.log(each_textArea_val[0].toUpperCase() + each_textArea_val.slice(1).toLowerCase());
    // })
}

// remove hypn 
function textRemoveHypn(){
    let removeHypn = textArea.value.replace(/-/g, " ");
    textArea.value = removeHypn;
}







