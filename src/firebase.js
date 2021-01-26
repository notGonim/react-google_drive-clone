import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"





const app = firebase.initializeApp({
  apiKey: "AIzaSyBFPudXIzhaFW7Kpd1L4PIsAiyWLcerirs",
  authDomain: "drive-clone-903b3.firebaseapp.com",
  projectId: "drive-clone-903b3",
  storageBucket: "drive-clone-903b3.appspot.com",
  messagingSenderId: "600196981117",
  appId: "1:600196981117:web:b10f6e0dbb72fd33286c14"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const auth = app.auth()

export default app
