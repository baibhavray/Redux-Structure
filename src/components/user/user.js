import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class User extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log(this.props);
    const {
      user,
      addUser,
      deleteUser,
      handleClickOpen,
      handleClickOpen2,
      handleClose,
      handleClose2,
      updateUser,
      editEmail,
      editName,
      setPassword,
      editContact,
      editGender,
    } = this.props;

    return (
      <div>
        <Grid item xs={12} md={6} lg={2}>
          <Button
            id="outlined-email-input"
            variant="contained"
            color="primary"
            fullWidth
            margin="normal"
            onClick={() => {
              handleClickOpen2();
            }}
          >
            Add User
          </Button>

          <Dialog
            open={user.open2}
            onClose={() => handleClose2(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                fullWidth
                label="Email Address"
                type="email"
                value={user.email}
                onChange={(event) => {
                  editEmail(event.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                label="Name"
                type="text"
                value={user.name}
                onChange={(event) => {
                  editName(event.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                fullWidth
                label="Password"
                type="password"
                value={user.password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="contact"
                fullWidth
                label="Contact"
                type="text"
                value={user.contact}
                onChange={(event) => {
                  editContact(event.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="gender"
                fullWidth
                label="Gender"
                type="text"
                value={user.gender}
                onChange={(event) => {
                  editGender(event.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose2(false)} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() =>
                  addUser(
                    user.email,
                    user.name,
                    user.password,
                    user.contact,
                    user.gender
                  )
                }
                color="primary"
              >
                ADD
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        {user.users.map((s) => (
          <Grid container spacing={3} direction="row">
            <Grid item xs={12} md={6} lg={2}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      style={{ backgroundColor: red[500] }}
                    >
                      {s.gender}
                    </Avatar>
                  }
                  title={s.name}
                  subheader={s.email}
                />
                {/* <CardActions disableSpacing> */}
                <IconButton aria-label="edit">
                  <EditIcon
                    onClick={() => {
                      handleClickOpen(s.email);
                      editName(s.name);
                      editGender(s.gender);
                    }}
                  />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => deleteUser(s.email)} />
                </IconButton>
                {/* </CardActions> */}
              </Card>
            </Grid>

            <Dialog
              open={user.open}
              onClose={() => handleClose(false)}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Update</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={user.email}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  fullWidth
                  label="Name"
                  type="text"
                  value={user.name}
                  onChange={(event) => {
                    editName(event.target.value);
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="gender"
                  fullWidth
                  label="Gender"
                  type="text"
                  value={user.gender}
                  onChange={(event) => {
                    editGender(event.target.value);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose(false)} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={() => updateUser(user.email, user.name, user.gender)}
                  color="primary"
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </div>
    );
  }
}

export default User;
