const formContainer = document.querySelector('.formContainer');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#pwdc');
const message = document.createElement('p');
message.classList.add('message');
const phone = document.querySelector('#phone')
const button = document.querySelector('button');

let phoneValue = phone.value;

function checkPass() {
    if (password.value != passwordConfirm.value) {
        formContainer.appendChild(message);
        message.textContent = "* Passwords do not match";
        message.style.color = 'var(--button-link-color)';
        password.style.borderColor = "var(--button-link-color)";
        passwordConfirm.style.borderColor = "var(--button-link-color)";
        formContainer.style.padding = "20px 80px 24px 45px";
        button.disabled = true;
    } else if (password.value == passwordConfirm.value) {
        formContainer.style.padding = "20px 80px 40px 45px";
        message.remove();
        password.style.borderColor = "#1c9ec6";
        passwordConfirm.style.borderColor = "#1c9ec6";
        button.disabled = false;
    } else if (password.placeholder == " " && passwordConfirm.placeholder == " ") {
        formContainer.style.padding = "20px 80px 40px 45px";
        message.remove();
        password.style.borderColor = "#dddddd";
        passwordConfirm.style.borderColor = "#dddddd";
        button.disabled = true;
    }
}

phone.addEventListener('keyup',() => {
    phone.value = phoneFormat(phone.value);
});

function phoneFormat(phone){
    phone = phone.replace(/\D/g,'');
    phone = phone.substring(0,11);
    if(phone.length == 0){
            phone = phone;
    }else if(phone.length < 4){
            phone = '('+phone;
    }else if(phone.length < 7){
            phone = '('+phone.substring(0,2)+')'+phone.substring(2,7);
    }else{
            phone = '('+phone.substring(0,2)+')'+phone.substring(2,7)+'-'+phone.substring(7,11);
    }
    return phone; 
}





// console.log(phone.value.length);
// // [\(]\d{2}[\)]\d{5}[\-]\d{4}

// function formatPhone(phone) {
//     let cleaned = ('' + phone).replace(/\D/g, '');
//     let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
//     if (match) {
//       return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//     }
//     return null;
//   }