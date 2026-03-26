# Clasificador de Imágenes: Gatos vs Perros 🐱🐶

Este proyecto implementa un modelo de aprendizaje profundo capaz de distinguir entre imágenes de gatos y perros con alta precisión. Utiliza técnicas de **Visión por Computador** y redes neuronales para automatizar la identificación de mascotas.



## 🚀 Características
- **Arquitectura CNN:** Uso de Redes Neuronales Convolucionales para la extracción de características visuales.
- **Preprocesamiento:** Reescalado, normalización y aumento de datos (*Data Augmentation*) para mejorar la generalización del modelo.
- **Evaluación:** Matrices de confusión y gráficas de precisión (*Accuracy*) vs. pérdida (*Loss*) durante el entrenamiento.
- **Predicción:** Script para cargar una imagen propia y obtener la clasificación en tiempo real.

## 🧠 Arquitectura del Modelo (CNN)

El clasificador utiliza una **Red Neuronal Convolucional (CNN)** diseñada para la extracción jerárquica de características visuales. La estructura principal consiste en:

* **Capas Convolucionales (`Conv2D`):** Encargadas de detectar patrones espaciales como bordes, texturas y formas características.
* **Capas de Agrupamiento (`MaxPooling2D`):** Reducen la dimensionalidad espacial, disminuyendo el costo computacional y permitiendo que el modelo sea invariante a pequeñas traslaciones.
* **Capas de Regularización (`Dropout`):** Implementadas para mitigar el *overfitting* y asegurar que el modelo generalice bien.
* **Capa de Clasificación Final:** Capa densa (`Dense`) con activación **Sigmoide** (para clasificación binaria), devolviendo una probabilidad entre 0 (gato) y 1 (perro).

### Configuración de Entrenamiento:
* **Optimizador:** Adam (tasa de aprendizaje adaptativa para una convergencia eficiente).
* **Función de Pérdida:** `binary_crossentropy`.
* **Épocas:** [Inserta aquí tu número, ej: 20-50] iteraciones completas sobre el dataset.

## 📂 Estructura del Proyecto
```text
Clasificador-de-imagenes---GatosvsPerros/
├── dataset/            # Imágenes de entrenamiento y prueba.
├── models/             # Pesos del modelo guardados (.h5 o .keras).
├── notebooks/          # Jupyter Notebooks con el flujo de entrenamiento.
├── scripts/            # Código para inferencia y carga de datos.
└── README.md           # Documentación del proyecto.
```

## 🛠️ Requisitos
- **Python 3.x**
- **TensorFlow / Keras**
- **OpenCV**
- **NumPy & Matplotlib**

## 📊 Entrenamiento
El modelo ha sido entrenado para maximizar la tasa de acierto, utilizando validación cruzada para asegurar la robustez del sistema.



### Instalación y Ejecución:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/EstebanGonzabay/Clasificador-de-imagenes---GatosvsPerros.git
   ```
2. Instala las dependencias:
   ```bash
   pip install tensorflow opencv-python matplotlib
   ```
3. Ejecuta el script de predicción:
   ```bash
   python predict.py --image ruta/a/tu/mascota.jpg
   ```

## ✒️ Autor
* **Esteban Gonzabay** - [EstebanGonzabay](https://github.com/EstebanGonzabay)

---
*Proyecto desarrollado con fines académicos en el área de Inteligencia Artificial y Machine Learning.*

