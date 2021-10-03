const API = "http://localhost:5000/api/v1";

export const editIcon = (icon, userId) => {
  return fetch(`${API}/update/icon/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(icon),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
