const API = "http://localhost:5000/api/v1";

export const addTheIcons = (iconinfo) => {
  return fetch(`${API}/icon`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: iconinfo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
