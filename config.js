import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyD674FApfzLrUgXTgPK_OzvAEbLJPZ4DUU",
  authDomain: "barter-system-4a05b.firebaseapp.com",
  databaseURL: "https://barter-system-4a05b.firebaseio.com",
  projectId: "barter-system-4a05b",
  storageBucket: "barter-system-4a05b.appspot.com",
  messagingSenderId: "230396357251",
  appId: "1:230396357251:web:de2fc8df5e8763456909b6",
  measurementId: "G-9MDTHYQ1YP"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();

