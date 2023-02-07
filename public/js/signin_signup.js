const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const title = document.querySelector('title');
const loginForm = document.querySelector(".sign-in-form");
const loginUsernameInput = document.querySelector(".login-username");
const loginPasswordInput = document.querySelector(".login-password");

sign_up_btn.addEventListener('click', ()=>{
    title.innerHTML = "Alumni Forum | Sign Up";
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', ()=>{
    title.innerHTML = "Alumni Forum | Sign In";
    container.classList.remove("sign-up-mode");
})

loginForm.addEventListener('submit', ()=> {
    const loginUsername = loginUsernameInput.value;
    const loginPassword = loginPasswordInput.value;  
    const loginInfo = {loginUsername, loginPassword};
    axios.post("/login", loginInfo);
})
