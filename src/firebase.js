import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFPudXIzhaFW7Kpd1L4PIsAiyWLcerirs",
  authDomain: "drive-clone-903b3.firebaseapp.com",
  projectId: "drive-clone-903b3",
  storageBucket: "drive-clone-903b3.appspot.com",
  messagingSenderId: "600196981117",
  appId: "1:600196981117:web:b10f6e0dbb72fd33286c14"
})

export const auth = app.auth()
export default app
