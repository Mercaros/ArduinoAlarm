import firebase from "firebase/app";
require('firebase/database');

const config = {
    apiKey: "AIzaSyAzomKD6zL7mKqMeB4QtI5RgtPaOjKTIAA",
    authDomain: "arduino-alarm-e7e74.firebaseapp.com",
    databaseURL: "https://arduino-alarm-e7e74.firebaseio.com",
    projectId: "arduino-alarm-e7e74",
    storageBucket: "arduino-alarm-e7e74.appspot.com",
    messagingSenderId: "175165633701",
    appId: "1:175165633701:web:f2c13a31b409636308494c"
};

firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();