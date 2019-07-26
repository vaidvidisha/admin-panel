
//validation function
    function Validate(){
        
        var validated=true;
        var everify =  (JSON.parse(localStorage.getItem("obj")));
        var verify_email = new Array();
      
        for(var i=0;i<everify.length;i++)
        {
              
            //    var verify_password = (everify[i].Password);   
               
                verify_email[i] = (everify[i].emailId);
            
        }
        debugger
        if (email.value == "") {
            document.getElementById("email_error").innerHTML= "Email is required";
            email.focus();
            validated = false;
            return validated;
          
        }
       
        else if(verify_email.find(email.value) == false){
            document.getElementById("email_error").innerHTML= "Email does not exist"; 
            email.focus();
            validated = false;
            return validated;
        }

        else if (password.value == "") {
            document.getElementById("password_error").innerHTML = "password is required";
            password.focus();
            validated = false;
            // return validated;
            
        }
        // else if( verify_password.find(password.value) == false){
        //     function(verify){

        //     }
        //     document.getElementById("password_error").innerHTML= "Incorrect password";
        //     password.focus();
        //     validated = false;
            
        // }
        return validated; 
    }
    function loginForm(){

        if (!Validate()) {
            console.log(1)
            return;
        }
        else{
            document.location.href = dashboard1.html;
        }

    }

        