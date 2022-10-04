import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBg76QLqsNRM0QKz_WWhHNnligpfZlD7dA",
    authDomain: "twitter-clone-59ee6.firebaseapp.com",
    projectId: "twitter-clone-59ee6",
    storageBucket: "twitter-clone-59ee6.appspot.com",
    messagingSenderId: "921036174478",
    appId: "1:921036174478:web:d82ab5ae3fa82f8b5f05df"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;