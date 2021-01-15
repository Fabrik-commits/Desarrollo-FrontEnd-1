// const urlDelBackend = 'http://localhost:8081/personas';
// const objetoSolicitud = {
//     user: document.getElementById('nombre').value,
//     apellido: document.getElementById('apellido').value,
//     dni: document.getElementById('dni').value,
// };
// const objetoParaConfiguracionDeFetch = {
//     method: 'POST',
//     body: JSON.stringify(objetoSolicitud),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };
// fetch(urlDelBackend, objetoParaConfiguracionDeFetch)
//     .then((res) => {
//         if (!res.ok) {
//             return Promise.reject('Error');
//         }
//         res.json();
//     })
//     .catch((error) => {
//         return Promise.reject('Error');
//     })
//     .then((response) => {
//         mostrarPersonas();
//         alert('Persona agregada correctamente');
//         formularioNuevaPersona.reset();
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Error al procesar la solcitud');
//     });

function isIncognito(callback) {
    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;

    if (!fs) {
        callback(false);
    } else {
        fs(window.TEMPORARY, 100, callback.bind(undefined, false), callback.bind(undefined, true));
    }
}

const verificarUserAgentConocido = () => {
    isIncognito(function (itIs) {
        if (itIs) {
            console.log('Estás en modo incognito !');
        } else {
            console.log('No estás en modo incognito :C');
        }
    });

    // Obtengo el user agent.
    const userAgentActual = window.navigator.userAgent;

    // Obtengo la lista de ingresos que fueron hechos desde los distintos navegadores.
    // window.localStorage.getItem('listaUsuarios') va a ser null la primera vez que se ejecute el código.
    // Si dicha lista no existe (es decir, es null), almaceno una lista vacía en la variable (con el operador or).
    const listaDeUsuarios = JSON.parse(window.localStorage.getItem('listaUsuarios')) || [];

    // Me fijo si ya existe el ingreso desde el navegador en el cual estoy (de acuerdo al user agent).
    // La función filter siempre devuelve un subconjunto de elementos, que varía según el criterio de búsqueda.
    // Para la primera vez que se ejecute el código o se inicie desde un navegador nuevo,
    // la variable usuarioEncontrado va a ser una lista vacía.
    const usuarioEncontrado = listaDeUsuarios.filter((userAgentIteracion) => userAgentIteracion === userAgentActual);

    if (usuarioEncontrado.length === 0) {
        // Si la lista tiene cero elementos, entonces el ingreso es nuevo.
        // Avisa y agrega el ingreso a la lista de ingresos del local storage.
        alert('El usuario es nuevo');
        listaDeUsuarios.push(userAgentActual);
        window.localStorage.setItem('listaUsuarios', JSON.stringify(listaDeUsuarios));
    } else {
        alert('Es un usuario conocido');
    }
};

verificarUserAgentConocido();

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

//-------------------------------------------------------------------------
// Esta en modo incognito?

// No -> tenemos que pasar el user agent.
// Si -> tenemos que pasar el user agent, el referer y su fingerprint
