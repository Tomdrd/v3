// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoDuXxhXa58BSfBtJUUItbk7s9YmlBOGo",
  authDomain: "meuprojetosaude-54d64.firebaseapp.com",
  databaseURL: "https://meuprojetosaude-54d64-default-rtdb.firebaseio.com/",
  projectId: "meuprojetosaude-54d64",
  storageBucket: "meuprojetosaude-54d64.firebasestorage.app",
  messagingSenderId: "105539186714",
  appId: "1:105539186714:web:c5286a9a3f5b4bc8c161a3",
  measurementId: "G-HF1H65STC1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export { auth, db };

