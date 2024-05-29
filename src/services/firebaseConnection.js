import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCCTWSHKlIGWWFA3z1Ozw5z_Iyf1fudxY",
  authDomain: "projet06-329c6.firebaseapp.com",
  projectId: "projet06-329c6",
  storageBucket: "projet06-329c6.appspot.com",
  messagingSenderId: "616242706082",
  appId: "1:616242706082:web:5ac0ff63ae3c88d7ca89fb",
  measurementId: "G-SNJXFT15G7"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }