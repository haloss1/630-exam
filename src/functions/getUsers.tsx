import axios from "axios";

const getUsers = async ({ pageParam = 1 }) =>
  await axios
    .get(`https://reqres.in/api/users?page=${pageParam}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((response) => response.data)
    .catch((e) => new Error(e));

export default getUsers;
