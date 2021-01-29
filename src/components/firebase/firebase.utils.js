import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAryFK2_kMZqDGL1nE1Ha34qVM3pDEtSts",
    authDomain: "ecommerce-ff625.firebaseapp.com",
    projectId: "ecommerce-ff625",
    storageBucket: "ecommerce-ff625.appspot.com",
    messagingSenderId: "1083545800695",
    appId: "1:1083545800695:web:1e2af3796c02d80fdb68f2",
    measurementId: "G-V3XKD0JCKB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
