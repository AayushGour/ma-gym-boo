import { MenuOutlined } from "@material-ui/icons";
import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <MenuOutlined />
        <h4 className="header-title">MA GYM BOO</h4>
      </div>
    );
  }
}
export default Header;
