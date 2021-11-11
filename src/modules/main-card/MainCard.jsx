import React, { Component } from 'react';
import "./MainCard.scss";

class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main-card-container">
                <img className="card-img" src={this.props.img} />
                <span className="card-title">{this.props.title}</span>
            </div>
        );
    }
}

export default MainCard;