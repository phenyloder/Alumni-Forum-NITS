const emailField = document.querySelector(".register-email")
const passwordField = document.querySelector(".register-password") ;
const emailErrorList = document.querySelector(".emailErrorList");
const passwordErrorList = document.querySelector(".passwordErrorList") ;

const passwordLoginField= document.querySelector(".login-password");
const passwordErrorListLogin=document.querySelector(".passwordErrorListLogin");

// console.log(passwordLoginField);

const setError = (t, msg) => {
    t.classList.add("error");
    emailErrorList.classList.remove("hide");
}

const setSuccess = (t) => {
    t.classList.add("success");
    emailErrorList.classList.add("hide");
}

const setErrorPassword = (t) => {
    t.classList.add("error");
    passwordErrorList.classList.remove("hide");
}

const  setSuccessPassword = (t) => {
    t.classList.add("success");
    passwordErrorList.classList.add("hide");
}

const setErrorLoginPassword = (t) => {
    t.classList.add("error");
    passwordErrorListLogin.classList.remove("hide");
}

const  setSuccessLoginPassword = (t) => {
    t.classList.add("success");
    passwordErrorListLogin.classList.add("hide");
}

const validateEmail = (t) => {
    const inputEmail = t.value;
    const checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const inputBoxOuter = t.parentElement;
    if(inputEmail === ""){
        emailErrorList.classList.add("hide");
        inputBoxOuter.classList.remove("success");
        inputBoxOuter.classList.remove("error");
    }
    else if(!inputEmail.match(checkEmail)){
        setError(inputBoxOuter, 'Enter correct Email!!!');
    }
    else{
        setSuccess(inputBoxOuter);
    }
}

const validateLoginPassword = (t) => {
    const inputPassword = t.value;
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const inputBoxOuter=t.parentElement;
    
    if(inputPassword===''){
        passwordErrorListLogin.classList.add("hide");
        inputBoxOuter.classList.remove("success");
        inputBoxOuter.classList.remove("error");
    }

    else if(!inputPassword.match(checkPassword)){
        setErrorLoginPassword(inputBoxOuter);
    }

    else{
        setSuccessLoginPassword(inputBoxOuter);
    }
    console.log(inputBoxOuter);
}

const validatePassword = (t) => {
    const inputPassword = t.value;
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const inputBoxOuter=t.parentElement;
    
    if(inputPassword===''){
        passwordErrorList.classList.add("hide");
        inputBoxOuter.classList.remove("success");
        inputBoxOuter.classList.remove("error");
    }

    else if(!inputPassword.match(checkPassword)){
        setErrorPassword(inputBoxOuter);
    }

    else{
        setSuccessPassword(inputBoxOuter);
    }
    console.log(inputBoxOuter);
}


emailField.addEventListener("change", (event) => {
    validateEmail(event.target);
})
passwordField.addEventListener("change", (event) => {
    validatePassword(event.target);
})

passwordLoginField.addEventListener("change", (event) => {
    validateLoginPassword(event.target);
})