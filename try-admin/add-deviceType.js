// export{fname,lname,email_id,passcode};
         //getting all input objects

         function addingDeviceType(){
              
                     
                var DTName = document.getElementById('deviceName').value;
                var tStatus = document.getElementById('Status').value;
                
                localStorage.setItem('deviceTypeName', DTName);
                localStorage.setItem('deviceTypeStatus', tStatus);

                var deviceTypeAdd = {
                     deviceTypeName : DTName,
                     deviceTypeStatus : status
                     
              }

              if((localStorage.getItem("deviceTypeAdd")) == null) {
                   localStorage.setItem("deviceTypeAdd", JSON.stringify([deviceTypeAdd]))
               }
               else {
                   var deviceTypes = (JSON.parse(localStorage.getItem("deviceTypeAdd")))
                   
                   deviceTypes.push(deviceTypeAdd)
                   localStorage.setItem("deviceTypeAdd", JSON.stringify(deviceTypes))
               }
                
         };