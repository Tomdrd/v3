import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoDuXxhXa58BSfBtJUUItbk7s9YmlBOGo",
  authDomain: "meuprojetosaude-54d64.firebaseapp.com",
  projectId: "meuprojetosaude-54d64",
  storageBucket: "meuprojetosaude-54d64.firebasestorage.app",
  messagingSenderId: "105539186714",
  appId: "1:105539186714:web:c5286a9a3f5b4bc8c161a3",
  measurementId: "G-HF1H65STC1"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Configurar a persistência
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistência configurada para armazenamento local.");
  })
  .catch((error) => {
    console.error("Erro ao configurar a persistência:", error);
  });

// Detectar o estado de autenticação
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuário está logado
    console.log("Usuário está logado:", user.displayName, user.email);
    exibirInformacoesDoUsuario(user);
  } else {
    // Usuário não está logado
    console.log("Usuário não está logado.");
    // Redirecione para a página de login ou exiba a interface de login
  }
});

// Função de login com Google
window.loginComGoogle = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Login com Google bem-sucedido:", user.displayName, user.email);
      exibirInformacoesDoUsuario(user);
    })
    .catch((error) => {
      console.error("Erro no login com Google:", error);
      alert("Erro no login: " + error.message);
    });
}

// Função para exibir informações do usuário
function exibirInformacoesDoUsuario(user) {
  document.getElementById('infoUsuario').innerHTML = `
    <p><strong>Bem-vindo:</strong> ${user.displayName}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <img src="${user.photoURL}" width="80">
  `;
}

// Função de logout
window.logout = function () {
  signOut(auth)
    .then(() => {
      console.log("Logout bem-sucedido.");
      // Redirecione para a página de login ou limpe a interface do usuário
    })
    .catch((error) => {
      console.error("Erro no logout:", error);
      alert("Erro no logout: " + error.message);
    });
}