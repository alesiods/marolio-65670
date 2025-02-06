
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqOYv_bP7tGcA8V-oX1Gi5xHRamw4UtBA",
  authDomain: "final-65670.firebaseapp.com",
  projectId: "final-65670",
  storageBucket: "final-65670.firebasestorage.app",
  messagingSenderId: "1009625383245",
  appId: "1:1009625383245:web:e98298c3cc7c54ca30f704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)


/* Creamos una funcion para subirlo automaticamente */

/* const misProductos = [
    { nombre: "Yerba", stock:200, precio: 5500, img: "../img/yerba.jpg", idCat: "lacteos"},
    { nombre: "Fideos", stock:100, precio: 2200, img: "../img/fideos.jpg", idCat: "lacteos"},
    { nombre: "Arroz", stock:150, precio: 3500, img: "../img/arroz.jpg", idCat: "almacen"},
    { nombre: "Aceite", stock:180, precio: 5900, img: "../img/aceite.jpg", idCat: "almacen"},
]

import { collection, doc, writeBatch } from "firebase/firestore"; 

const subirProductos = async () => {
  const batch = writeBatch(db); // Crear un batch
  const productosRef = collection(db, "productos"); // Referencia a la colección

  // Recorre el array de productos
  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef); // Crea un nuevo documento con un ID automático
    batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
  });

  // Ejecuta el batch
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};

subirProductos() */