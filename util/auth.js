import axios from "axios";

const API_KEY = "AIzaSyDrXO71E6OccKTsGLO1PHD0MNmHLdK49cI";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}
export async function login(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}
