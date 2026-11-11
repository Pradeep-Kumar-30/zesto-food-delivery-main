import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeBc7p6Ihzcnl6PVMVeg5DV99NBrR7gv0",  // ← hardcode karo
  authDomain: "zzesto-21a16.firebaseapp.com",
  projectId: "zzesto-21a16",
  storageBucket: "zzesto-21a16.firebasestorage.app",
  messagingSenderId: "788989402890",
  appId: "1:788989402890:web:6683a10026e3a76c6c64f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };