document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zipcode').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(){
const name = document.getElementById('name');
const re = /^[a-zA-Z]{2,10}$/;
if(!re.test(name.value)){
    name.classList.add('is-invalid');
}else{
    name.classList.remove('is-invalid');
}

}

function validateZip(){
    const zip = document.getElementById('zipcode');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
    
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
    
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;  // for sri lanka phone numbers 
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
    
}