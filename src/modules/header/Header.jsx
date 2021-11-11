import { Avatar, Drawer, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import React, { Component } from "react";
import { mainList } from "../../imgUrls";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDrawer: false
    };
  }
  render() {
    return (
      <div className="header">
        <a className="hamburger-menu" onClick={() => this.setState({ toggleDrawer: true })}>
          <MenuOutlined />
        </a>
        <h2 className="header-title">MA GYM BOO</h2>
        <Drawer anchor={"left"} open={this.state.toggleDrawer} onClose={() => this.setState({ toggleDrawer: false })}>
          <List>
            {mainList.map(element => {
              return <ListItem>
                <ListItemAvatar>
                  <Avatar src={element.img} />
                </ListItemAvatar>
                <ListItemText primary={element.title} />
              </ListItem>
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}
export default Header;
