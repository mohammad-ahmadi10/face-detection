import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-XfMylzwsE311yLEVSqAXrC5OKVhLmsQ",
    authDomain: "face-detetion-b7484.firebaseapp.com",
    databaseURL: "https://face-detetion-b7484.firebaseio.com",
    projectId: "face-detetion-b7484",
    storageBucket: "face-detetion-b7484.appspot.com",
    messagingSenderId: "558960084283",
    appId: "1:558960084283:web:b6ea0e48856a8a346b631e",
    measurementId: "G-Q5520N76P5"
}

firebase.initializeapp(config);
export default firebase;