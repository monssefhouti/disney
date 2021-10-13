import firebase from "firebase/compat";

const firebaseConfig = {
        apiKey: "AIzaSyDMV2xMK-L6t_DXCskWE8jAUXvCUDCz2Ws",
        authDomain: "disneyclone20.firebaseapp.com",
        projectId: "disneyclone20",
        storageBucket: "disneyclone20.appspot.com",
        messagingSenderId: "54804780894",
        appId: "1:54804780894:web:372f767404d1901563a1cf",
        measurementId: "G-BRSEN5XETH"
};
const app=firebase.initializeApp(firebaseConfig);
const database=app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default database;