import {
  SET_USERS,
  SET_TRUE,
  SET_FALSE,
  EMAIL,
  NAME,
  CONTACT,
  GENDER,
  SET_TRUE2,
  SET_FALSE2,
  PASSWORD,
} from "../../constants/user/constants";

const initial_state = {
  users: [],
  open: false,
  open2: false,
  name: "",
  email: "",
  gender: "",
  contact: "",
  password: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_USERS:
      return (state = { ...state, users: action.payload });
    case SET_TRUE:
      return (state = { ...state, open: true, email: action.payload });
    case SET_FALSE:
      return (state = { ...state, open: false });
    case EMAIL:
      return (state = { ...state, email: action.payload });
    case NAME:
      return (state = { ...state, name: action.payload });
    case PASSWORD:
      return (state = { ...state, password: action.payload });
    case CONTACT:
      return (state = { ...state, contact: action.payload });
    case GENDER:
      return (state = { ...state, gender: action.payload });
    case SET_TRUE2:
      return (state = { ...state, open2: true });
    case SET_FALSE2:
      return (state = { ...state, open2: false });
    default:
      return state;
  }
}
