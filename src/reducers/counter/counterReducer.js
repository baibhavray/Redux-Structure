import {
  INC_COUNT,
  DEC_COUNT,
  SET_USERS,
  LOADER_TRUE,
  LOADER_FALSE,
  SET_USERS_LODERS,
  LOGIN,
  PASSWORD,
} from "../../constants/counter/ActionTypes";

const initial_state = {
  count: 0,
  users: [],
  usersLoder: [],
  loader: false,
  email: "",
  password: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case INC_COUNT:
      return (state = { ...state, count: initial_state.count++ });
    case DEC_COUNT:
      return (state = { ...state, count: initial_state.count-- });
    case SET_USERS:
      return (state = { ...state, users: action.payload });
    case SET_USERS_LODERS:
      return (state = { ...state, usersLoder: action.payload });
    case LOADER_TRUE:
      return (state = { ...state, loader: true });
    case LOADER_FALSE:
      return (state = { ...state, loader: false });
    case LOGIN:
      return (state = { ...state, email: action.payload });
    case PASSWORD:
      return (state = { ...state, password: action.payload });
    default:
      return state;
  }
}
