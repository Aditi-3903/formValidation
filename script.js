let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");


form.addEventListener("submit",function(dets){
    dets.preventDefault();
    
    document.querySelector("#emailError").textContent = "";
     document.querySelector("#passwordError").textContent ="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordans){
        document.querySelector("#passwordError").textContent = "Password is incorrect.";
         document.querySelector("#passwordError").style.display = "initial";
            isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is Good!";
        setTimeout(() => {
        window.location.href = "index1.html"},2000);
    }

  
}
);