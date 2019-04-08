window.cipher = {
  encode: (texto1, numeroIngresado) => {
    /* Acá va tu código */
      //Recorriendo mensaje
      let cifrado="";
      for (let i=0; i < texto1.length; i++){
        //console.log(texto1[i]);
        //Variable para guardar ASCII
        let letra = texto1[i].charCodeAt();
        //console.log(letra);
        //Variable para guardar ASCII con fórmula
        let nuevoCodigo = (letra-65+numeroIngresado)%26+65;
        //console.log(nuevoCodigo);
        //Variable para convertir ASCII a letra
        let asciiLetra = String.fromCharCode(nuevoCodigo);
        //console.log(asciiLetra);
        cifrado = cifrado += asciiLetra;
        //console.log(cifrado)
        }
        //Return, resulatado FINAAAAL 
        return cifrado;

},
  decode: (texto1, numeroIngresado) => {
    /* Acá va tu código */
    let descifrado="";
    for (let i=0; i < texto1.length; i++){
      //console.log(texto1[i]);
      //Variable para guardar ASCII
      let letra = texto1[i].charCodeAt();
      //console.log(letra);
      //Variable para guardar ASCII con fórmula
      let nuevoCodigo = (letra+65-numeroIngresado)%26+65;
      //console.log(nuevoCodigo);
      //Variable para convertir ASCII a letra
      let asciiLetra = String.fromCharCode(nuevoCodigo);
      //console.log(asciiLetra);
      descifrado = descifrado += asciiLetra;
      //console.log(descifrado)
    }
      //Return, resulatado FINAAAAL 
      return descifrado;
  }
}

