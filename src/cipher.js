window.cipher = {
  encode: (mensajeUsuario, offset) => {
      //Recorriendo mensaje
      let nuevoTexto = "";
      let nuevaLetra = "";
      for (let i = 0; i < mensajeUsuario.length; i++){
        //Variable para guardar ASCII
        let letra = mensajeUsuario[i].charCodeAt(0);
        // Cifrado en Mayúsculas
        if (letra >= 65 && letra <= 90){
        //Variable para guardar ASCII con fórmula
            nuevaLetra = (letra - 65 + offset) % 26 + 65;
        //Variable para convertir ASCII a letra
            nuevoTexto += String.fromCharCode(nuevaLetra);
      }
        // Cifrado de minúsculas
        else if (letra >= 97 && letra <= 122){
            nuevaLetra = (letra - 97 + offset) % 26 + 97;
            nuevoTexto += String.fromCharCode(nuevaLetra);     
      }
        // Cifrado números
        else if (letra >= 48 && letra <= 57){
            nuevaLetra = (letra - 48 + offset) % 10 + 48;
            nuevoTexto += String.fromCharCode(nuevaLetra);  
      }
        else { // Guarda lo que encuentre y que no esté en los parámetros
        nuevoTexto += mensajeUsuario[i];
      }
    }
        //Return, resultado FINAAL 
        return nuevoTexto;

},
  decode: (mensajeUsuario, offset) => {
      let nuevoTexto = "";
      let nuevaLetra = "";
      for (let i = 0; i < mensajeUsuario.length; i++){
        //Variable para guardar ASCII
        let letra = mensajeUsuario[i].charCodeAt(0);
        // Cifrado en Mayúsculas
        if (letra >= 65 && letra <= 90){
        //Variable para guardar ASCII con fórmula
            nuevaLetra = (letra - 90 - offset) % 26 + 90;
        //Variable para convertir ASCII a letra
            nuevoTexto += String.fromCharCode(nuevaLetra);
      }
        // Cifrado de minúsculas
        else if (letra >= 97 && letra <= 122){
            nuevaLetra = (letra - 122 - offset) % 26 + 122;
            nuevoTexto += String.fromCharCode(nuevaLetra);
      }
        // Cifrado números
        else if (letra >= 48 && letra <= 57){
            nuevaLetra = (letra - 57 - offset) % 10 + 57;
            nuevoTexto += String.fromCharCode(nuevaLetra);
      }
        else { // Guarda lo que encuentre y que no esté en los parámetros
        nuevoTexto += mensajeUsuario[i];
      }
    }
        //Return, resultado FINAAL 
        return nuevoTexto;
   }

  };