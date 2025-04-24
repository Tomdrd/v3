const firebaseConfig = {
    apiKey: "AIzaSyDoDuXxhXa58BSfBtJUUItbk7s9YmlBOGo",
    authDomain: "meuprojetosaude-54d64.firebaseapp.com",
    projectId: "meuprojetosaude-54d64",
    storageBucket: "meuprojetosaude-54d64.firebasestorage.app",
    messagingSenderId: "105539186714",
    appId: "1:105539186714:web:c5286a9a3f5b4bc8c161a3",
    measurementId: "G-HF1H65STC1"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  window.loginComGoogle = function () {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        document.getElementById('infoUsuario').innerHTML = `
          <p><strong>Bem-vindo:</strong> ${user.displayName}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <img src="${user.photoURL}" width="80">
        `;
      })
      .catch((error) => {
        alert("Erro no login: " + error.message);
      });
  }
  
  import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const auth = getAuth();
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // A persistência foi definida com sucesso.
    // Agora você pode tentar fazer login.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Ocorreu um erro ao definir a persistência.
    console.error("Erro ao definir a persistência:", error);
  });