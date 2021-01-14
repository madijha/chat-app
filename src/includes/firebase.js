import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAvRTlUan-pwFlitajkCV4nYJ6uKFcc6B8",
    authDomain: "direactjs.firebaseapp.com",
    projectId: "direactjs",
    storageBucket: "direactjs.appspot.com",
    messagingSenderId: "1049924385001",
    appId: "1:1049924385001:web:1c2943b8a567650efcd878",
    measurementId: "G-RG2K4QHYMD"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();