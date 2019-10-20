import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDJpqNuOLyAbqq8igt8MxBxYeYLGZ0AuhU",
    authDomain: "project-manager-45228.firebaseapp.com",
    databaseURL: "https://project-manager-45228.firebaseio.com",
    projectId: "project-manager-45228",
    storageBucket: "project-manager-45228.appspot.com",
    messagingSenderId: "67501483567",
    appId: "1:67501483567:web:04b379e853c4e60b8a48da"
});

export const db = firebase.firestore();


