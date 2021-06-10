import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBf3W18LVbG5Am409P8sIpiSPv5WQP4T8U',
	authDomain: 'netflix-clone-6f953.firebaseapp.com',
	projectId: 'netflix-clone-6f953',
	storageBucket: 'netflix-clone-6f953.appspot.com',
	messagingSenderId: '894235303279',
	appId: '1:894235303279:web:be32765c880effb5131c9a',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
