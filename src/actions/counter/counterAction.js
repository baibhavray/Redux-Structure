import {
  INC_COUNT,
  DEC_COUNT,
  SET_USERS,
  LOADER_FALSE,
  LOADER_TRUE,
  SET_USERS_LODERS,
  LOGIN,
  PASSWORD,
} from "../../constants/counter/ActionTypes";

export function increaseCount() {
  return { type: INC_COUNT };
}
export function decreaseCount() {
  return { type: DEC_COUNT };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users,
  };
}

export function getUers() {
  return (dispatch) => {
    return fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(setUsers(resJson.data));
      });
  };
}

export function setUsersLoader(user) {
  return {
    type: SET_USERS_LODERS,
    payload: user,
  };
}
export function showLoader() {
  return { type: LOADER_TRUE };
}
export function hideLoader() {
  return { type: LOADER_FALSE };
}
export function getUersLoader() {
  return (dispatch) => {
    dispatch(showLoader(true));
    return fetch("https://reqres.in/api/users?delay=3")
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(hideLoader(false));
        dispatch(setUsersLoader(resJson.data));
      });
  };
}

export function setEmail2(email) {
  return {
    type: LOGIN,
    payload: email,
  };
}
export function setPwd2(password) {
  return {
    type: PASSWORD,
    payload: password,
  };
}
export function checkUser(email, password) {
  return (dispatch) => {
    return fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        //    return console.log(resJson.token);
        if (resJson.token) {
          console.log("LOG in successful");
          alert("Login Successful");
        } else {
          console.log("Wrong credentials");
          alert("Wrong credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
