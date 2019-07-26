
var admin;

function openadmin(evt, adminType) {
    debugger
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(adminType).style.display = "block";
    evt.currentTarget.className += " active";
    admin = adminType;
    check();
}  

    

  
      
//initializing array and pushing the values of key in it
function check(){

    if(admin == 'user')
    {
        var userData =  (JSON.parse(localStorage.getItem("obj")));
        var name = new Array();
        var secName = new Array();
        var emailid = new Array();
        for(var i=0;i<userData.length;i++)
            {
                
            
             name[i] =  userData[i].firstName;
             secName[i] = userData[i].lastName;
             emailid[i] = userData[i].emailId;
        
            document.getElementById("name").innerHTML = name[i];
            document.getElementById("secName").innerHTML = secName[i];
            document.getElementById("emailid").innerHTML = emailid[i];
            }}       
        
        

    else if(admin == 'Device')
    {
        var deviceData = (JSON.parse(localStorage.getItem("deviceAdd")));
        var dname = new Array();
        var status = new Array();
        var sno = new Array();
        var dtype = new Array();
        for (var i=0;i<deviceAdd.length;i++)
        {
             dname[i] =  deviceData[i].deviceName;
             status[i] = deviceData[i].Status;
             sno[i] = deviceData[i].serialNo;
             dtype[i] = deviceType[i].deviceType;

            document.write(deviceData[i].deviceName);
            document.write(deviceData[i].Status);
            document.write(deviceData[i].serialNo);
            document.write(deviceData[i].deviceType);
        }
            }

    
    else if(admin == 'Device_types')
    {
        var deviceTypeData = (JSON.parse(localStorage.getItem("deviceTypeAdd")));
        var dtname = new Array();
        var dtstatus = new Array();
        for (var i=0;i<deviceTypeAdd.length;i++)
        {
            dtname[i] =  deviceTypeData[i].deviceTypeName;
            dtstatus[i] = deviceTypeData[i].deviceTypeStatus;


            document.write(deviceTypeData[i].deviceTypeName);
            document.write(deviceTypeData[i].deviceTypeStatus);
        
        }
    }
    
        
             
}    

     
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();


    var addingUser = document.getElementById('myButton');
    addingUser.onclick = () =>{
        location.href = 'register.html';
        
    }
    
     
        
   







