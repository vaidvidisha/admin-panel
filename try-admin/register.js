 
      
      
      function Validate() {
            
        var validated = true;
        if (firstName.value == "") {
            document.getElementById("firstName_error").innerHTML = "First name is required";
            // firstName.focus();
            validated = false;
             
        }

        else if (lastName.value == "") {
            document.getElementById("lastName_error").innerHTML = "Last name is required";
            // lastName.focus();
            validated = false;
            
        }

        else if (email.value == "") {
            document.getElementById("email_error").innerHTML= "Email is required";
            // email.focus();
            validated = false;
          
        }

        else if (password.value == "") {
            document.getElementById("password_error").innerHTML = "password is required";
            // password.focus();
            validated = false;
            
        }

        else if (password.value != confirmPassword.value) {
            document.getElementById("confirmPassword_error").innerHTML = "The two password didn't match";
            validated = false;
            
        }
         return validated;

    }

      
      
      function submitRegisterForm() {
        
            if (!Validate()) {
                console.log(1)
                return;
            }
            else 
            {
                    var fName = document.getElementById('firstName').value;
                    var lName = document.getElementById('lastName').value;
                    var Email = document.getElementById('email').value;
                    var Password = document.getElementById('password').value;
                    var obj = {
                        firstName : fName,
                        lastName : lName,
                        emailId : Email,
                        password : Password
                    }

                    if((localStorage.getItem("obj")) == null) {
                        localStorage.setItem("obj", JSON.stringify([obj]))
                    }
                    else {
                        var users = (JSON.parse(localStorage.getItem("obj")))
                        users.push(obj)
                        localStorage.setItem("obj", JSON.stringify(users))
                    }
                  
                    window.location.href = "login.html";
                    
                }
            }

        
        

