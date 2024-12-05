// ... other imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};

// Initialize Firebase with error handling
try {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "yourCollection"));

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ">>", doc.data());
  });
} catch (error) {
  console.error("Firebase initialization or data retrieval error:", error);
  // Implement appropriate error handling like displaying a user-friendly message, retry logic etc.
}
// ... rest of your Firebase code