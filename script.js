// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA3EB9sHjtWcde4JSVRRyfsZRa5oO353U",
  authDomain: "flipdeck-4449b.firebaseapp.com",
  projectId: "flipdeck-4449b",
  storageBucket: "flipdeck-4449b.firebasestorage.app",
  messagingSenderId: "805303515948",
  appId: "1:805303515948:web:a9d72d4cdd70924cb60a89",
  measurementId: "G-H7B9WC9TD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);





//troubleshoot  HERE LATER note: attempted success message on form submission but not working
// Function to add a new document to Firestore
document.addEventListener('DOMContentLoaded', function() {

    //get form element
    const signupForm = document.getElementById('signup-form');

    //listen for form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); //prevent default form submission / not reloading the page

        //get email value
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value.trim();

        //validate email is not empty
        if (email === '') {
            alert('Please enter a valid email address.');
            return;
        }

        //add email to Firestore
        addDoc(collection(db, 'signup-form'), {
            email: email,
            signupDate: new Date(),
            timestamp: Date.now()
        })

        .then(() => {
            document.getElementById('message').textContent = 'Thank you for signing up!';
            document.getElementById('message').style.color = 'green';
            emailInput.value = ''; //clear the input field
        })        .catch((error) => {

            // Show error message code
            document.getElementById('message').textContent = 'An error occurred. Please try again later.';
            document.getElementById('message').style.color = 'red';
            console.error('Error adding document: ', error);
            
        }
        )
    })
});
        