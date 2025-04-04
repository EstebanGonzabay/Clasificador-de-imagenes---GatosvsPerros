let tamano = 400;
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let otrocanvas = document.getElementById("otrocanvas");
let ctx = canvas.getContext("2d");

let currentStream = null;
let facingMode = "user";

window.onload = function () {
  mostrarCamara();
  predecir();
};

function mostrarCamara() {
  let opciones = { audio: false, video: { width: tamano, height: tamano } };
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(opciones)
      .then(stream => {
        currentStream = stream;
        video.srcObject = stream;
        procesarCamara();
      })
      .catch(err => alert("No se pudo acceder a la cámara"));
  } else {
    alert("Navegador no soporta cámara");
  }
}

function cambiarCamara() {
  if (currentStream) currentStream.getTracks().forEach(track => track.stop());
  facingMode = facingMode === "user" ? "environment" : "user";
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { facingMode: facingMode, width: tamano, height: tamano },
  }).then(stream => video.srcObject = stream)
    .catch(err => console.log("Error al cambiar cámara", err));
}

document.getElementById("cambiar-camara").onclick = cambiarCamara;

function procesarCamara() {
  ctx.drawImage(video, 0, 0, tamano, tamano, 0, 0, tamano, tamano);
  setTimeout(procesarCamara, 20);
}
