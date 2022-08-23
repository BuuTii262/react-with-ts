import { Component } from "react";
import UserInterface from "./../interfaces/UserInterface";
import classes from "./../App.module.scss";
export default class UserComponent extends Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props);
  }

  render() {
    return (
      <div className={classes.UserCard}>
        Hello : <b>{this.props.name}</b>
        <br />
        You are <b>{this.props.age} years old</b>
        <br />
        You Skills are <b>{this.props.skills} years old</b>
        <br />
        <button className={classes.btn} onClick={this.props.onClikIncreaseAge}>
          {" "}
          Increase age{" "}
        </button>
      </div>
    );
  }
}
