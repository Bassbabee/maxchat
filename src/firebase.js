import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyAClIxlZozAqujhnJT7AyfwypddO1QULrk',
  authDomain: 'maxchat-cd6c8.firebaseapp.com',
  databaseURL: 'https://maxchat-cd6c8.firebaseio.com',
  projectId: 'maxchat-cd6c8',
  storageBucket: 'maxchat-cd6c8.appspot.com',
  messagingSenderId: '757864060081'
};
firebase.initializeApp(config);

export default firebase;
