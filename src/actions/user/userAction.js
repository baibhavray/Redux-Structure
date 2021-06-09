import {
  SET_USERS,
  SET_TRUE,
  SET_FALSE,
  NAME,
  EMAIL,
  CONTACT,
  GENDER,
  SET_TRUE2,
  SET_FALSE2,
  PASSWORD,
} from "../../constants/user/constants";

export function setUsers(user) {
  return {
    type: SET_USERS,
    payload: user,
  };
}

export function getUsers() {
  return (dispatch) => {
    return fetch("http://localhost:8000/get_users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 100,
        skip: 0,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(setUsers(resJson.result));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function addUser(email, name, password, contact, gender) {
  return (dispatch) => {
    return fetch("http://localhost:8000/add_single_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        contact: contact,
        gender: gender,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        dispatch(handleClose2());
        dispatch(getUsers());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function handleClickOpen2() {
  return { type: SET_TRUE2 };
}
export function handleClose2() {
  return { type: SET_FALSE2 };
}

export function deleteUser(email) {
  return (dispatch) => {
    return fetch("http://localhost:8000/delete_user", {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        // console.log(resJson.result);
        dispatch(getUsers());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function updateUser(email, name, gender) {
  return (dispatch) => {
    return fetch("http://localhost:8000/update_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        gender: gender,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(handleClose());
        dispatch(getUsers());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function handleClickOpen(email) {
  return { type: SET_TRUE, payload: email };
}

export function handleClose() {
  return { type: SET_FALSE };
}
export function editName(name) {
  return { type: NAME, payload: name };
}
export function editGender(gender) {
  return { type: GENDER, payload: gender };
}

export function editContact(contact) {
  return { type: CONTACT, payload: contact };
}
export function editEmail(email) {
  return { type: EMAIL, payload: email };
}
export function setPassword(password) {
  return { type: PASSWORD, payload: password };
}
