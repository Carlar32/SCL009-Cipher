//Acá se guarda mensaje ingresado por usuario
let botoncifrar = document.getElementById("cifrar");
botoncifrar.addEventListener("click",()=> {
    //Se guarda mensaje e imprime en consola
    let mensajeUsuario = document.getElementById("mensajeUsuario").value;
    //Variable cambia de string a número (parseInt)
    let offset = parseInt(document.getElementById("offset").value);
    //Muestra en resultado de la función encode en caja2
    document.getElementById("mensajeCodificado").value = window.cipher.encode (mensajeUsuario, offset);

    }
);
let botondescifrar = document.getElementById("descifrar");
botondescifrar.addEventListener("click",()=> {
    //Se guarda mensaje e imprime en consola
    let mensajeUsuario = document.getElementById("mensajeUsuario").value;
    //Variable cambia de string a número (parseInt)
    let offset = parseInt(document.getElementById("offset").value);
    //Muestra en resultado de la función encode en caja2
    document.getElementById("mensajeCodificado").value = window.cipher.decode (mensajeUsuario, offset);

    }
);

let botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click",()=> {
    document.getElementById("offset").value = "";  
    document.getElementById("mensajeUsuario").value = "";  
    document.getElementById("mensajeCodificado").value = "";   

}
);