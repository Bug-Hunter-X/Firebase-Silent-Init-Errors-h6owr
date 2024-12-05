import { initializeApp } from "firebase/app";
// ... other imports

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};

// Initialize Firebase (this is where the error might occur)
const app = initializeApp(firebaseConfig);

// ... rest of your Firebase code