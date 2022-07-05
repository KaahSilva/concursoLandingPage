const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');


form.addEventListener('submit' , (e) =>{
    if(!checkInputs()){
       e.preventDefault() 
    }
})



function checkInputs(){
    const firstnameValue = firstname.value  
    const surnameValue = surname.value      
    const emailValue = email.value          
   

    if(firstnameValue === ''){
        errorValidation(firstname, "Preencha essa campo :(");
        return false
    }else{
        successValidation(firstname);
    }

    if(surnameValue === ''){
        errorValidation (surname , "Preencha essa campo :(" );
        return false
    } else{
        successValidation(surname);
    }


    if(emailValue == ''){
        errorValidation (email, "Preencha essa campo :(" );
        return false
     } else {
        successValidation(email);
    }

    return true
    
    

}


function errorValidation(input , message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'form-control error ';
   
   
    
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';

 
}



 





