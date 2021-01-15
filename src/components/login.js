import {auth} from '../includes/firebase';
import axios from "axios";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export const loginHandler = (email) => {
  const form = new FormData();
  form.append('email', email);
  return axios.post('http://localhost/di/user_login.php', form);
};