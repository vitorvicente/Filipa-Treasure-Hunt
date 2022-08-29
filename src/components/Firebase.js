import { default as FirebaseSuper } from 'vtr-react-components/dist/Firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWiUHWHAPft5TJZ7RbteUSr5pdvMIqs_c",
  authDomain: "vtr-pt.firebaseapp.com",
  databaseURL: "https://vtr-pt.firebaseio.com",
  projectId: "vtr-pt",
  storageBucket: "vtr-pt.appspot.com",
  messagingSenderId: "363782155278",
  appId: "1:363782155278:web:3c751b2d7f410fe246205f",
  measurementId: "G-7WCW87EYXR"
};

class Firebase extends FirebaseSuper {
  constructor(app) {
    super(app, firebaseConfig);
  }
}

export default Firebase;