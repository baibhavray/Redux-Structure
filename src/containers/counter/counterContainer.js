import { connect } from "react-redux";
import Counter from "../../components/counter/counter";

import {
  increaseCount,
  decreaseCount,
  getUers,
  getUersLoader,
  setEmail2,
  setPwd2,
  checkUser,
} from "../../actions/counter/counterAction";

export const mapStateToProps = (store) => {
  return {
    count: store.counter,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => {
      dispatch(increaseCount());
    },
    decreaseCount: () => {
      dispatch(decreaseCount());
    },
    getUers: () => {
      dispatch(getUers());
    },
    getUersLoader: () => {
      dispatch(getUersLoader());
    },
    setEmail2: (email) => {
      dispatch(setEmail2(email));
    },
    setPwd2: (password) => {
      dispatch(setPwd2(password));
    },
    checkUser: (email, password) => {
      dispatch(checkUser(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
