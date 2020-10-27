import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";

export default class BasicLayout extends Component {
  render() {
    const { children, title, path, component } = this.props;
    return (
      <div className={classnames("basicLayout")}>
        <article>{children}</article>
      </div>
    );
  }
}
