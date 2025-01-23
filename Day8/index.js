// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe-UbjT_u9Ph8GS_EPuSRMLsdr--YXrbs",
    authDomain: "fitx-app-a610c.firebaseapp.com",
    projectId: "fitx-app-a610c",
    storageBucket: "fitx-app-a610c.appspot.com",
    messagingSenderId: "887118825757",
    appId: "1:887118825757:web:2bb81e12ade8c0dddf39f4",
    measurementId: "G-6PQK317KB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission event
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('status');

    if (name && email && message) {
        try {
            // Add data to Firestore collection
            await addDoc(collection(db, "user_data"), {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });

            status.textContent = "Data added successfully!";
            status.style.color = "green";

            // Clear form
            document.getElementById('dataForm').reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            status.textContent = "Error adding data!";
            status.style.color = "red";
        }
    } else {
        status.textContent = "All fields are required!";
        status.style.color = "red";
    }
});
