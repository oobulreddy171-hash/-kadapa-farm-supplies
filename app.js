// Firebase integration for Kadapa Farming Supplies
// 1) Replace firebaseConfig values with your Firebase project's Web app config.
// 2) Enable Authentication (Phone or Email) and Firestore.
// 3) Publish the accompanying firestore.rules before testing.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, updateDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCS2Cce5HnoPXuV17RWtLTL7uzbf7b2RnU",
  authDomain: "kadapa-farm-supplies.firebaseapp.com",
  projectId: "kadapa-farm-supplies",
  storageBucket: "kadapa-farm-supplies.firebasestorage.app",
  messagingSenderId: "109618724944",
  appId: "1:109618724944:web:5567bd29105beb664a9155",
  measurementId: "G-W7XH42XKT7"
};
const configured = true;
if (configured) {
  const app=initializeApp(firebaseConfig), db=getFirestore(app), auth=getAuth(app);
  await signInAnonymously(auth);
  window.KFS={
    async createBooking(data){
      const ref=await addDoc(collection(db,"bookings"),{...data,createdAt:serverTimestamp(),status:"Confirmed"});
      return ref.id;
    },
    async getBookings(){
      const snap=await getDocs(query(collection(db,"bookings"),orderBy("createdAt","desc")));
      return snap.docs.map(d=>({id:d.id,...d.data()}));
    },
    async updateStatus(id,status){await updateDoc(doc(db,"bookings",id),{status,updatedAt:serverTimestamp()});}
  };
  console.info("Kadapa Farming Supplies Firebase connected.");
} else console.warn("Firebase config missing: running demo/local mode.");
