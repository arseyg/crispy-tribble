import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchInfo } from "../actions";

class EosStuff extends Component {
  componentDidMount() {
    this.props.fetchInfo();
  }
  render() {
    return (
      <div>
        <div>EOS.IO BLOCKS</div>
      </div>
    );
  }
}

// hooks!
// useSelector and useDispatch
// instead of mapState and mapDispatch

const mapDispatch = {
  fetchInfo
};

export default connect(null, mapDispatch)(EosStuff);
