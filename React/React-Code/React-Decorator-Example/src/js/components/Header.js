import React from "react";
import Title from "./Header/Title";
import injectProps from '../decorator/injectProps';

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  @injectProps
  render({ firstName, lastName, email, title}) {
    return (
      <div>
        <Title title={title} />
        <input value={title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
