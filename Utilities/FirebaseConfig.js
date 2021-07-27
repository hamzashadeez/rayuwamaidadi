import firebase from 'firebase'

var firebaseConfiguration = {
  apiKey: "AIzaSyBrUE8naUVEjDDqbAOiO0CQyqD1ZyeaMR0",
  authDomain: "rayuwamaidadi-8aebc.firebaseapp.com",
  projectId: "rayuwamaidadi-8aebc",
  storageBucket: "rayuwamaidadi-8aebc.appspot.com",
  messagingSenderId: "377097478160",
  appId: "1:377097478160:web:98041ef0df4aa0a89b6a95",
  measurementId: "G-6FMPSFGBEG"
};



export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfiguration)
  : firebase.app()
  // const storage = firebaseConfiguration.storage();

  // export {db, auth, provider}; 