import React, { Component } from "react";

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
      const { subscribe } = this.context;
      this.update();
      // 订阅
      subscribe(() => {
        this.update();
      });
    }

    update = () => {
      const { getState, dispatch, subscribe } = this.context;
      // getStateh获取当前store的state
      let stateProps = mapstateToProps(getState());
      let dispatchProps;
      // mapDispatchToProps Object/Function
      if (typeof mapDispatchToProps === 'object') {

      } else if (typeof mapDispatchToProps === 'function') {

      } else {
        // 默认
        dispatchProps = { dispatch };
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      });
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
