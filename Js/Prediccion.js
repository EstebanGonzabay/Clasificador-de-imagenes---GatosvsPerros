function predecir() {
    if (modelo != null) {
      resample_single(canvas, 100, 100, otrocanvas);
      let ctx2 = otrocanvas.getContext("2d");
      let imgData = ctx2.getImageData(0, 0, 100, 100);
  
      let arr = [];
      let fila = [];
  
      for (let i = 0; i < imgData.data.length; i += 4) {
        let gris = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3 / 255;
        fila.push([gris]);
        if (fila.length === 100) {
          arr.push(fila);
          fila = [];
        }
      }
  
      let tensor = tf.tensor4d([arr]);
      let resultado = modelo.predict(tensor).dataSync();
      let respuesta = resultado <= 0.5 ? "Gato" : "Perro";
  
      // Mostramos el resultado
      let resultadoElem = document.getElementById("resultado");
      resultadoElem.innerHTML = respuesta;
  
      // Limpiamos clases anteriores (por si cambia)
      resultadoElem.classList.remove("gato", "perro");
  
      // Añadimos clase correspondiente
      if (respuesta === "Gato") {
        resultadoElem.classList.add("gato");
      } else {
        resultadoElem.classList.add("perro");
      }
    }
  
    setTimeout(predecir, 150);
  }
  