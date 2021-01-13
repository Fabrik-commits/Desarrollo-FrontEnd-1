const usuarioActual = window.navigator.userAgent;

// Obtengo la lista de usuarios que ingresaron.
const listaDeUsuarios = JSON.parse(window.localStorage.getItem("listaUsuarios"));

// Me fijo si el usuario que ingreso ya esta en esa lista (para ver si es nuevo o no).

if(!listaDeUsuarios){
    // Avisa que es nuevo.
    alert("El usuario es nuevo");
    // Armo una lista con los usuarios que visitaron hasta ahora (si es la primera vez, entonces esta lista solamente tiene el usuario actual).
    const listaConElPrimerUsuario = [usuarioActual];
    // Le agrego la lista de usuarios conocidos al local storage.
    window.localStorage.setItem("listaUsuarios", JSON.stringify(listaConElPrimerUsuario));
} else {
    // Si exste la lista de usuarios, me fijo si el actual se encuentra en ella y me lo traigo.
    const usuarioEncontrado = listaDeUsuarios.filter(usuario => usuario === usuarioActual);

    if(usuarioEncontrado){
        // Si el usuario encontrado no es null significa que ya existe.
        alert("Es un usuario conocido");
    } else {
        alert("El usuario es nuevo");
        // Si el ususario no existe, entonces lo agrego a la lista.
        listaDeUsuarios.push(usuarioActual);
        window.localStorage.setItem("listaUsuarios", JSON.stringify(listaDeUsuarios));
    }
}

// Avisa si el usuario es conocido o desconocido. SI es desconocido, entonces lo agrego a la lista de usuarios.




 
// Este script debe hacer una petición a una url de ejemplo 
// (no tiene que existir, lo importante es la implementación en JavaScript) por POST, 
// y debe pasarle en el body del request el User Agent, 
// si se accedió con el navegador en modo incógnito, el referer y su fingerprint. 

// Estos parámetros tienen que ser obtenidos con JavaScript antes de hacer la petición. 
// Para el caso del fingerprint, la idea es que cada usuario que ingrese a la page obtenga un 
// hash único para identificarlo, y se mantenga en sus siguientes visitas. Usar cualquier fuente 
// de almacenamiento disponible desde el navegador para persistir el mismo. El script con su funcionalidad, 
// debe estar en un archivo js aparte, y debe inicializarse desde el HTML separado del resto de la lógica 
// JS como si se tratara de un servicio externo de un proveedor de analytics. 
 
