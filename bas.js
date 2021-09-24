console.log('js started');
var Name = "";
var Password = "";

function log() {

    Name = document.getElementById("UserName").value;
     Password = document.getElementById("password").value;
     if ( Name == "Akhil" && Password == "1234567890"){
     document.getElementById("result").innerHTML = 'Succesfuuly LogedIn'
     document.getElementById("result").style.color = "green";
     console.log("Successfully LogedIn");
     window.location.href='Bas.html'

    
}
else {
    console.log("Invalid email/password");
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Invalid email/password";
}
return false;
}