function deteccionUsuario(){
    alert('Se ha detectado un usuario');
    //console.log('Se ha detectado un usuario');
    localStorage.setItem("usuario", "pepe");
    alert("Usuario: " + localStorage.getItem("usuario"));
    //console.log("Usuario");
    const usr = navigator.userAgent;
    document.write(navigator.userAgent);
    console.log(usr);
}