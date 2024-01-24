import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

// Function to sign out
export async function signOutUser() {
	let error = null; // Variable to store any error that occurs

	try {
		await signOut(auth); // Sign out the current user
	} catch (e) {
		error = e; // Catch and store any error that occurs during sign-out
	}

	return { error }; // Return the sign-out error (if any)
}
