import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZhwQdtWaoo1BGeQrLkMu4HEk059r_0es",
  authDomain: "instagram-clone-dbe6f.firebaseapp.com",
  projectId: "instagram-clone-dbe6f",
  storageBucket: "instagram-clone-dbe6f.appspot.com",
  messagingSenderId: "437519150487",
  appId: "1:437519150487:web:39b8cdc6e466a6051468d2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
export default firebase;
