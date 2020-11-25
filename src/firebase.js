import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAXgg5J9ErhW9kWs5p3Bdcv-2-v250goxM",
  authDomain: "tinder-clone-9e528.firebaseapp.com",
  databaseURL: "https://tinder-clone-9e528.firebaseio.com",
  projectId: "tinder-clone-9e528",
  storageBucket: "tinder-clone-9e528.appspot.com",
  messagingSenderId: "383369365131",
  appId: "1:383369365131:web:21dec43ff12194982b768e",
  measurementId: "G-FXFDM2HLDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database