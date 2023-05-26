import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//mero firebase ko projec ko details 
const firebaseConfig = {
    apiKey: "AIzaSyCXHJCBAd2Gr-BaoBcmhyOXOL4ZiBh6Ma0",
    authDomain: "e-clone-cf06b.firebaseapp.com",
    projectId: "e-clone-cf06b",
    storageBucket: "e-clone-cf06b.appspot.com",
    messagingSenderId: "625121205499",
    appId: "1:625121205499:web:f3800e95818ec6a5afa45e",
    measurementId: "G-GMZQSZJCN8"
};

// this does everything 
const firebaseApp = initializeApp(firebaseConfig);

//databse ko lagi 
const db = getFirestore();

//authorization ko lagi 
const auth = getAuth(firebaseApp);


//bahira use garna ko lagi 
export { db, auth };



// kei samasya aayo vane pakkai yahai aako hunu parxa hai ta firebase sambandhi chai  haha 