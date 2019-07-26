// export{fname,lname,email_id,passcode};
         //getting all input objects
      
         function addingDevice(){
              
              
                var dName = document.getElementById('deviceName').value;
                var status = document.getElementById('Status').value;
                var sNo = document.getElementById('serialNo').value;
                var dType = document.getElementById('deviceType').value;
                localStorage.setItem('Device_Name', dName);
                localStorage.setItem('Status', status);
                localStorage.setItem('Serial_No', sNo);
                localStorage.setItem('Device_Type', dType);

                var deviceAdd = {
                       deviceName : dName,
                       Status : status,
                       serialNo : sNo,
                       deviceType : dType
                }

                if((localStorage.getItem("deviceAdd")) == null) {
                     localStorage.setItem("deviceAdd", JSON.stringify([deviceAdd]))
                 }
                 else {
                     var devices = (JSON.parse(localStorage.getItem("deviceAdd")))
                     
                     devices.push(deviceAdd)
                     localStorage.setItem("deviceAdd", JSON.stringify(devices))
                 }
         };
