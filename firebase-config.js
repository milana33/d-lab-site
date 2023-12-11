// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/database';
//
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAuuzmWwpL-sKuFm63ANltFbvks5WGP5hQ",
//   authDomain: "d-lab-site.firebaseapp.com",
//   projectId: "d-lab-site",
//   storageBucket: "d-lab-site.appspot.com",
//   messagingSenderId: "911338368461",
//   appId: "1:911338368461:web:7ee86de40b424396ee2884"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Ваша конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuuzmWwpL-sKuFm63ANltFbvks5WGP5hQ",
  authDomain: "d-lab-site.firebaseapp.com",
  databaseURL: 'https://d-lab-site-default-rtdb.firebaseio.com',
  projectId: "d-lab-site",
  storageBucket: "d-lab-site.appspot.com",
  messagingSenderId: "911338368461",
  appId: "1:911338368461:web:7ee86de40b424396ee2884"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получение экземпляра базы данных
const database = getDatabase(app);

// Экспорт инициализированных экземпляров
export { app, database };
