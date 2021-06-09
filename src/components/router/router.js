import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "../../containers/loginCon";
import Counter from "../../containers/counter/counterContainer";
import User from "../../containers/user/userContainer";

import {
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
  },
  content2: {
    flexGrow: 1,
  },
});
class Routes extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route exact path="/" component={Login} />
            <Route path="/count" component={Counter} />
            <Route path="/user" component={User} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Routes);
