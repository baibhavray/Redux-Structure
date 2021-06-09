import { connect } from "react-redux";
import User from "../../components/user/user";

import {
  getUsers,
  addUser,
  handleClickOpen2,
  deleteUser,
  updateUser,
  handleClickOpen,
  handleClose,
  editEmail,
  editName,
  editContact,
  editGender,
  handleClose2,
  setPassword,
} from "../../actions/user/userAction";

export const mapStateToProps = (store) => {
  return {
    user: store.users,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    addUser: (email, name, password, contact, gender) => {
      dispatch(addUser(email, name, password, contact, gender));
    },
    handleClickOpen2: () => {
      dispatch(handleClickOpen2());
    },
    handleClose2: () => {
      dispatch(handleClose2());
    },
    deleteUser: (email) => {
      dispatch(deleteUser(email));
    },
    updateUser: (email, name, gender) => {
      dispatch(updateUser(email, name, gender));
    },
    handleClickOpen: (email) => {
      dispatch(handleClickOpen(email));
    },
    handleClose: () => {
      dispatch(handleClose());
    },
    editEmail: (email) => {
      dispatch(editEmail(email));
    },
    editName: (name) => {
      dispatch(editName(name));
    },
    setPassword: (password) => {
      dispatch(setPassword(password));
    },
    editContact: (contact) => {
      dispatch(editContact(contact));
    },
    editGender: (gender) => {
      dispatch(editGender(gender));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
