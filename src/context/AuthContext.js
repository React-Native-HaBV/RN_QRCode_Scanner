import CreateDataContext from './CreateDataContext';
// import {navigate} from '../navigationRef';
import auth, {firebase} from '@react-native-firebase/auth';
import {navigate} from '../rootNavigation';


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

const authReducer = (state, action) => {
  switch (action.type) {
      case 'add_error':
          return { ...state, errorMessage: action.payload};
      case 'signup':
          return { errorMessage: '', user: action.payload };
      case 'signin':
          return { errorMessage: '', user: action.payload };
      case 'clear_error_message':
          return { ...state, errorMessage: ''};
      case 'signout':
          return { user: null, errorMessage: ''};
      default:
          return state;
  }
};
const tryLocalSignin = dispatch => async () => {
    try {
         firebase
            .auth()
             .onAuthStateChanged(user => {
            if (user) {
                dispatch({type: 'signin', payload: user.uid});
                navigate('Home');
            } else {
                navigate('SignIn');
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password}) => {
    try {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(currentUser => {
                console.log("Test Sign Up Account Firebase");
                console.log(currentUser);
                dispatch({type: 'signup', payload: currentUser.user.uid});
                navigate('SignIn')
                console.log('Create Account successful');
            })
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }
        console.error(error);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign up'
        });
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
         firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(currentUser => {
                console.log("Test Sign In Account Firebase");
                console.log(currentUser);
                dispatch({type: 'signin', payload: currentUser.user.uid});
                navigate('Home')
                console.log("Login successful");
            })
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};

const signout = dispatch => async () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: 'signout'});
            navigate('Loading');
        });
};

export const {Provider, Context} = CreateDataContext(
  authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { user: null, errorMessage: '' }
);
