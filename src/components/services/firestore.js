import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDgVXDa-pPtc8xT6l8HFQHszh1FuE-NMM4",
        authDomain: "ghproj-3f8a8.firebaseapp.com",
        projectId: "ghproj-3f8a8",
        storageBucket: "ghproj-3f8a8.appspot.com",
        messagingSenderId: "747009654705",
        appId: "1:747009654705:web:416a7ecc59e56f40ea0790"
});

const db = firebaseApp.firestore();

export { db };