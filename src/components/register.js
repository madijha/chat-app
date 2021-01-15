import axios from "axios";

export const registerHandler = (email, username) => {
  const form = new FormData();
  form.append('username', username);
  form.append('email', email);
  return axios.post('http://localhost/di/user_register.php', form);
};
  