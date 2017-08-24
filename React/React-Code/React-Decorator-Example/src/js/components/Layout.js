import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to",
      firstName:"vinod",
      lastName:"Nagaraj",
      email:"email"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    const {title, firstName, lastName, email } = this.state;
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={title} firstName={firstName} lastName={lastName} email={email}/>
        <Footer />
      </div>
    );
  }
}


