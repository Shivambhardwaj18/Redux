import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";
import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          background: "#435368",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ width: "50%" }}>
          <LeftTopComponent
            val={this.props.render_state.leftTop}
            clicked={this.props.lt_state}
          />
          <LeftDownComponent
            val={this.props.render_state.leftDown}
            clicked={this.props.ld_state}
          />
        </div>
        <div style={{ width: "50%" }}>
          <RightTopComponent
            val={this.props.render_state.rightTop}
            clicked={this.props.rt_state}
          />
          <RightDownComponent
            val={this.props.render_state.rightDown}
            clicked={this.props.rd_state}
          />
        </div>

        <Button
          style={{ borderRadius: 10, backgroundColor: "#5DAAE0" }}
          variant="outlined"
          color={"secondary"}
          onClick={this.props.reset_state}
        >
          RESET
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    render_state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lt_state: (e) => dispatch({ type: "L_T", value: e.target.value }),
    ld_state: (e) => dispatch({ type: "L_D", value: e.target.value }),
    rt_state: (e) => dispatch({ type: "R_T", value: e.target.value }),
    rd_state: (e) => dispatch({ type: "R_D", value: e.target.value }),
    reset_state: () => dispatch({ type: "reset" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
