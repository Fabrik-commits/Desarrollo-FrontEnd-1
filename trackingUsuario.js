function deteccionUsuario(){
    // alert('Se ha detectado un usuario');    
    const usr = navigator.userAgent;   
    console.log(usr);
    //alert(localStorage.setItem(usr));
    //document.write(localStorage.getItem(usr));
    // alert(usr);
    // document.write(usr);
}

// document.getElementById("deteccionUsuario").addEventListener("load", deteccionUsuario);

function UserAgentHandler(){

    let localUserAgent = localStorage.getItem("actualUser")|| '';

    const loadUser = () =>{

        if(localUserAgent === '')
        {
            console.log("Registering new user");
            var hash = require('object-hash');
         
        }else{
            console.log("User registered as "+localUserAgent);
        }
    }

}

cle 
    return(
        <div>
            {loadUser}
        </div>
    );




var hash = require('object-hash');
let hashValue = hash({user : navigator.userAgent,date : Date.now()});
localStorage.setItem("actualUser",hashValue);    






function UserAgentHandler(){
 
    let localUserAgent = localStorage.getItem("actualUser")|| '';
   
 
    const loadUser = () =>{       
        
        if(localUserAgent === '')        
        {
            console.log("Registering new user");
            var hash = require('object-hash');
            let hashValue = hash({user : navigator.userAgent,date : Date.now()});
            localStorage.setItem("actualUser",hashValue);
            
 
        }else{
            console.log("User registered as "+localUserAgent);
        }     

    }
}