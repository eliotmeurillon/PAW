import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_4RCNqkGUaxyEUjnNVx-NuSISJaj4PcQ",
  authDomain: "pawv2bdd-8cfa2.firebaseapp.com",
  projectId: "pawv2bdd-8cfa2",
  storageBucket: "pawv2bdd-8cfa2.appspot.com",
  messagingSenderId: "648626614416",
  appId: "1:648626614416:web:461ecf29e1260c12dbe815",
  databaseURL:
    "https://pawv2bdd-8cfa2-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "gs://pawv2bdd-8cfa2.appspot.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const storage = getStorage(app);

export { auth, db, storage };
