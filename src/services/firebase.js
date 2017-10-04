import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCmE5V2cgGjwlRGUmUAJ-gY4xh4gUgX5XY',
  authDomain: 'party365-fb086.firebaseapp.com',
  databaseURL: 'https://party365-fb086.firebaseio.com',
  projectId: 'party365-fb086',
  storageBucket: 'party365-fb086.appspot.com',
  messagingSenderId: '595912238520'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
