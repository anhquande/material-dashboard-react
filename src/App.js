//REACT COMPONENTS
import React from "react";
//PROP TYPES
import PropTypes from "prop-types";
//CSS
import "./App.css";
//STORE
import Store from "./store";
//ACTIONS
import { clearToken, setToken } from "./entities/token/actions";
import { clearApiHost, setApiHost } from "./entities/apiHost/actions";
import { setScreenDimensions } from "./entities/dimensions/actions";
//ROUTERS

class App extends React.Component {
  static propTypes = {
    apiHost: PropTypes.string,
    token: PropTypes.string,
    type: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.setReducerStates();
    this.updateScreenDimensions();
  }

  componentDidMount() {
    //Add listener for screen dimensions
    window.addEventListener("resize", this.updateScreenDimensions);
  }

  componentWillUnmount() {
    this.clearReducerStates();

    //Remove listener for screen dimensions
    window.removeEventListener("resize", this.updateScreenDimensions);
  }

  /**
   * Will be called if the screen size changes
   */
  updateScreenDimensions = () => {
    //Put screen dimensions inside redux index
    Store.dispatch(setScreenDimensions(window.innerWidth, window.innerHeight));
  };

  /**
   * Will add the given props to the redux index
   */
  setReducerStates = () => {
    Store.dispatch(setApiHost(this.props.apiHost));
    Store.dispatch(setToken(this.props.token));
  };

  /**
   * Will clear all redux index inputs
   */
  clearReducerStates = () => {
    Store.dispatch(clearApiHost());
    Store.dispatch(clearToken());
  };

  render() {
    return (
      <div>
        <Provider store={Store} />
      </div>
    );
  }
}

export default App;
