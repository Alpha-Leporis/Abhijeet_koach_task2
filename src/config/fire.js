import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

/**
* @author Abhijeet Rathore
**/

const firebaseConfig = {

    apiKey: "AIzaSyDUpPOWjQhKA2zTbAMEPZTxhwwnC7kZOgY",
  
    authDomain: "lvl2-ce484.firebaseapp.com",
  
    projectId: "lvl2-ce484",
  
    storageBucket: "lvl2-ce484.appspot.com",
  
    messagingSenderId: "219542907060",
  
    appId: "1:219542907060:web:0ac60ca22744cb309b4fe1",
  
    measurementId: "G-LRLLT4XVNE"
  
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
   