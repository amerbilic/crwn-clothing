import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyD-6yx33_HzJBA3QOmMCRZbTOcKnpopYHU",
    authDomain: "crown-db-8c45e.firebaseapp.com",
    projectId: "crown-db-8c45e",
    storageBucket: "crown-db-8c45e.appspot.com",
    messagingSenderId: "72605695107",
    appId: "1:72605695107:web:6498311c7a2cf4d3216fb6",
    measurementId: "G-5PZFB7G7EM"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;