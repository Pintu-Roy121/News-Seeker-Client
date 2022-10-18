// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFsNNNO6NFwp4p_CisBqE3l9cEbQEZ4Po",
    authDomain: "news-seeker-8f881.firebaseapp.com",
    projectId: "news-seeker-8f881",
    storageBucket: "news-seeker-8f881.appspot.com",
    messagingSenderId: "90840713495",
    appId: "1:90840713495:web:78a7de2b087ccaac5a0f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;