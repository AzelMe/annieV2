// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoN94y2ECwxhZw8q4GBTCdiPLdiFrKtaI",
  authDomain: "annie-808fe.firebaseapp.com",
  projectId: "annie-808fe",
  storageBucket: "annie-808fe.firebasestorage.app",
  messagingSenderId: "304126452651",
  appId: "1:304126452651:web:bd6636d9137ccbff8968ee"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Firestore y Auth si los necesitas
const db = firebase.firestore();
const auth = firebase.auth();