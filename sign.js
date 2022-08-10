signUpForm = document.querySelector(".signup_form"),
 signInForm = document.querySelector(".signin_form"), 
 signInBtn = document.querySelector("#signInBtn"), 
 signUpBtn = document.querySelector("#signUpBtn");



signInBtn.addEventListener("click", function () {
     signUpForm.classList.add("hide"); // add class hide to signup form 
     signInForm.classList.remove("hide"); // remove class hide to signup form
    });



signUpBtn.addEventListener("click", function () {
     signUpForm.classList.remove("hide"); // remove class hide to signin form 
     signInForm.classList.add("hide"); // add class hide to signin form
    });