import React, { Component } from "react";
import store from './store/index';
const ValueContext = React.createContext();

export const connect = (
  mapstateToProps,
  mapDispatchToProps
) => WrappedComponent => {
  return class extends Component {
    // 此时组件的所有生命周期都能获得this.context
    static contextType = ValueContext;
    constructor(props) {
      super(props);
      this.state = {
        props: {}
      };
    }
    componentDidMount() {
      const { getState, dispatch } = this.context;
      let stateProps = mapstateToProps(getState());
      let dispatchProps = { dispatch };
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
      console.log("this.context", this.context);
      return <WrappedComponent {...this.state.props} />;
    }
  };
};

export class Provider extends Component {
  render() {
    return (
      <ValueContext.Provider value={this.props.store}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}
