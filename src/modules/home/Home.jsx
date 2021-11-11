import React, { Component } from "react";
import { mainList } from "../../imgUrls";
import MainCard from "../main-card/MainCard";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="home-container">
      <div className="cards-container">
        {mainList.map(element => {
          return <MainCard img={element.img} title={element.title} />
        })}
      </div>
    </div>;
  }
}
export default Home;
