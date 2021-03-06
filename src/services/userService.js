import Axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/user"
    : "//localhost:3030/api/user";

let axios = Axios.create({
  withCredentials: true,
});

async function login(user) {
  const userData = await axios.put(BASE_URL, user);
  return userData.data;
}

async function signup(user) {
  const userData = await axios.post(BASE_URL, user);
  return userData.data;
}

async function update(user) {
  const userData = await axios.put(`${BASE_URL}/${user._id}`, user);
  return userData.data;
}

export { login, update, signup };
