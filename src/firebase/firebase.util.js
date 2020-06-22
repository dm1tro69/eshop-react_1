import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config =  {
    apiKey: "AIzaSyDxaQk19MP-JRJmMfphlTfrnxQVkduYmFk",
    authDomain: "crwn-db-8bf2e.firebaseapp.com",
    databaseURL: "https://crwn-db-8bf2e.firebaseio.com",
    projectId: "crwn-db-8bf2e",
    storageBucket: "crwn-db-8bf2e.appspot.com",
    messagingSenderId: "1068750009750",
    appId: "1:1068750009750:web:e7d9b7c4cf9b94c24c19b7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

   if(!snapShot.exists){
       const {displayName, email} = userAuth
       const createdAt = new Date()
       
       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       } catch (error) {
           console.log('error creating user', error.message)
       }
   }
    return userRef

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



