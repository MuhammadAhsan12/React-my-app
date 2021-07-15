import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAjbD09TyMADFHENkJ2TnKRIqIbNWrszwc",
    authDomain: "react-my-app-7e64d.firebaseapp.com",
    projectId: "react-my-app-7e64d",
    storageBucket: "react-my-app-7e64d.appspot.com",
    messagingSenderId: "877881127644",
    appId: "1:877881127644:web:137f92cfc9721410087a19",
    measurementId: "G-VQ8GZZPFPD"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default fire;