import React, { Component } from "react";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

class Counter extends Component {
  // componentDidMount() {
  //     this.props.getUers();
  //     this.props.getUersLoader();
  // }

  render() {
    console.log(this.props);

    let {
      count,
      increaseCount,
      decreaseCount,
      getUers,
      getUersLoader,
      setEmail2,
      setPwd2,
      checkUser,
    } = this.props;
    // console.log(count.users)
    // console.log(count.loader)
    return (
      <div>
        <button onClick={() => decreaseCount()}>-</button>
        <button>{count.count}</button>
        <button onClick={() => increaseCount()}>+</button>

        <div>
          {" "}
          {<br></br>}
          <button onClick={() => getUers()}>Click Me</button>
          {count.users.map((user) => (
            <div>
              {user.first_name} {user.last_name}
              {<br></br>}
              {user.email}
              {<br></br>}
              {<br></br>}
            </div>
          ))}
        </div>

        <div>
          {" "}
          {<br></br>}
          <button onClick={() => getUersLoader()}>Click Me LOADER</button>
          {count.usersLoder.map((user) => (
            <div>
              {user.first_name} {user.last_name}
              {<br></br>}
              {user.email}
              {<br></br>}
              {<br></br>}
            </div>
          ))}
        </div>

        <Dialog open={count.loader}>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>

        <div>
          <Grid container justify="center" item md={4} xs={12}>
            <Card className="login_card">
              <TextField
                label="Email"
                type="email"
                fullWidth={true}
                margin="normal"
                variant="outlined"
                required={true}
                value={count.email}
                onChange={(event) => {
                  setEmail2(event.target.value);
                }}
              />
              {/* {count.email} */}
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                required={true}
                value={count.password}
                onChange={(event) => {
                  setPwd2(event.target.value);
                }}
              />
              {/* {count.password}  */}

              <Button
                disabled={
                  count.email === "" || count.password === "" ? true : false
                }
                id="outlined-email-input"
                variant="contained"
                color="primary"
                fullWidth
                margin="normal"
                onClick={() => {
                  checkUser(count.email, count.password);
                }}
              >
                {" "}
                Log In
              </Button>
            </Card>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Counter;
