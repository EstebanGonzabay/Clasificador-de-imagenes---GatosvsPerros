var modelo = null;

(async function () {
  console.log("Cargando modelo...");
  modelo = await tf.loadLayersModel("model/model.json");
  console.log("Modelo cargado");
})();
