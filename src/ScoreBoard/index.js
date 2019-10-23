import React, { Component } from 'react';

class ScoreBoard extends Component {


    render() {
        console.log("what state in ScoreBoard", this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Coffee: {this.props.xWin}</span>
                    </div>
                    <div className="col-md-6">
                        <span>Chocolate: {this.props.oWin}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;