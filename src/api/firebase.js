import auth, {firebase} from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3bf8TY5Kz4GoVR75YeMBfmamH9jcGlm8",
    authDomain: "qrcodescanner-d2b2c.firebaseapp.com",
    databaseURL: "https://qrcodescanner-d2b2c.firebaseio.com",
    projectId: "qrcodescanner-d2b2c",
    storageBucket: "qrcodescanner-d2b2c.appspot.com",
    messagingSenderId: "390011175498",
    appId: "1:390011175498:ios:a3ec421948b72d725e9cb3",
    measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.apps);

export default firebase;
