import React, { Component } from "react";
import { connect } from "react-redux";

// connect 链接store与组件 其实这里返回的是一个新的组件 hoc
export default connect(
  // mapStateToProps Function (state, ownProps)
  // state => ({ count: state })
  (state, ownProps) => {
    console.log("ownProps", ownProps);
    return {
      count: state
    };
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props", this.props);
      const { count, dispatch } = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{count}</p>
          <button onClick={() => dispatch({ type: 'ADD' })}>
            add use dispatch
          </button>
        </div>
      );
    }
  }
);
