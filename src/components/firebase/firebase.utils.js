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


  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName , email} = userAuth ; 
      const createdAt  = new Date();
      try {
        await userRef.set({
          displayName , 
          email , 
          createdAt , 
          ...additionalData
        });
      }catch(err){
        console.log("error creating user",err.message)
      }
    }
    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;




  export const addCollectionAndDocuments =async (collectionKey , objectsToadd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToadd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef , obj)
    })

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map(
      doc => {
        const {title , items} = doc.data();

        return {
          routeName : encodeURI(title.toLowerCase()),
          id : doc.id,
          title ,
          items
        }
      }
    )

      return transformedCollection.reduce((accumulator , collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator ; 
      },{})
  }