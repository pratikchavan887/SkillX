const firebaseConfig = {
  apiKey: "AIzaSyCLfzxSVW2jp2DHycpogkHrqivaEO7XkkM",
  authDomain: "skillx-08.firebaseapp.com",
  projectId: "skillx-08",
  storageBucket: "skillx-08.firebasestorage.app",
  messagingSenderId: "940120729592",
  appId: "1:940120729592:web:e19444c71960db23c3980d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();