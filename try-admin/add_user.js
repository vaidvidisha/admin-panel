 
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
                  
                    var obj1 = {
                        firstName : fName,
                        lastName : lName,
                        emailId : Email
                        
                    }

                    if((localStorage.getItem("obj1")) == null) {
                        localStorage.setItem("obj1", JSON.stringify([obj1]))
                    }
                    else {
                        var users1 = (JSON.parse(localStorage.getItem("obj1")))
                        users.push(obj1)
                        localStorage.setItem("obj1", JSON.stringify(users1))
                    }
                  
                    window.location.href = "dashboard1.html";
                    
                }
            }