// Animación simple al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#6c2ed1';
  } else {
    header.style.backgroundColor = '#7B3FE4';
  }
});
// Probar guardar un dato en Firestore
db.collection("prueba").add({
  mensaje: "¡Firebase está funcionando!"
})
.then(() => {
  console.log("Dato guardado correctamente en Firestore.");
})
.catch((error) => {
  console.error("Error al guardar el dato:", error);
});

// Probar leer datos de Firestore
db.collection("prueba").get()
.then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log("Dato leído:", doc.data());
  });
})
.catch((error) => {
  console.error("Error al leer los datos:", error);
});