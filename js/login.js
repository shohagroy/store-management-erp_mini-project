

// login button function 
function loginprotal(){

    // get email and password value and set varible
    const emailFild = document.getElementById('email-fild');
    const passwordFild = document.getElementById('password-fild');

    const email = emailFild.value;
    const password = passwordFild.value;

    // input rong and right waring
    if(email === "" || password === ""){
        alert("Please Enter Your Email and Password !")
        emailFild.value = "";
        passwordFild.value = "";
    }
    else{
        
        if(email == "abc@gmail.com" && password == '1234'){

            window.location.href = "sales/sales-entry.html"

            emailFild.value = "";
            passwordFild.value = "";
        }
        else{
            alert("Email or Password Wrong!")
            emailFild.value = "";
            passwordFild.value = "";
        }
    
    }
   
}