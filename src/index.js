//Acá se guarda mensaje ingresado por usuario
let botoncifrar = document.getElementById("cifrar");
botoncifrar.addEventListener("click",()=> {
    //Se guarda mensaje e imprime en consola
    let texto1 = document.getElementById("texto1").value;
    // console.log(texto1)
    //Variable cambia de string a número (parseInt)
    let numeroIngresado = parseInt(document.getElementById("numero").value);
    //Muestra en resultado de la función encode en caja2
    document.getElementById("texto2").value = window.cipher.encode (texto1, numeroIngresado);
   // console.log(texto2);

    }
);
let botondescifrar = document.getElementById("descifrar");
botondescifrar.addEventListener("click",()=> {
    //Se guarda mensaje e imprime en consola
    let texto1 = document.getElementById("texto1").value;
    // console.log(texto1)
    //Variable cambia de string a número (parseInt)
    let numeroIngresado = parseInt(document.getElementById("numero").value);
    //Muestra en resultado de la función encode en caja2
    document.getElementById("texto2").value = window.cipher.decode (texto1, numeroIngresado);
   // console.log(texto2);

    }
);

let botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click",()=> {
    document.getElementById("numero").value = "";  
    document.getElementById("texto1").value = "";  
    document.getElementById("texto2").value = "";   

}
);