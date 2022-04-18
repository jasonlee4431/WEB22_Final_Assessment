const regex = /^[A-Z][A-Za-z ]+$/;
const nameRegex = /[a-zA-Z]/;
const productDescp = document.getElementById('productDescp');
const form = document.getElementById('signup');
const errors = document.getElementById('errors');
const username = document.getElementById('username');
const checkBox_Num = document.signup.supplierStatus.length;

form.addEventListener('submit', (e) => {
    let errorMessages = []
    if(!productDescp.value.match(regex)){ // if product description is not valid, add error message
        errorMessages.push('Product Description must start with a cap and only alphabet allowed!');
    }

    if(!username.value.charAt(0).match(nameRegex) || username.value.length < 6){   // if username is not valid, add error message
        errorMessages.push('Username must start with an alphabet and at least 6 characters!');
    }

    let checked = 0;
    for(let i = 0; i < checkBox_Num; i++){  // check to see if each box is selected
        if(document.signup.supplierStatus[i].checked == true){
            checked++;
        }
    }
    if(checked == 0){   // if there is no box checked, add error message
        errorMessages.push('You must select at least one check box!');
    }

    if(errorMessages.length > 0) { // if there is ANY error, prevent from submitting
        e.preventDefault();
        errors.style.display = 'block';
        errors.innerText = errorMessages.join('\n\n');
    } else {
        alert("Form submitted!");
    }
})

form.addEventListener('reset', (e) => {
    errors.style.display = 'none';
})