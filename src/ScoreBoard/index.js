import React, { Component } from 'react';

class ScoreBoard extends Component {


    render() {
        console.log("what state in ScoreBoard", this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {this.props.x}
                    </div>
                    <div className="col-md-6">
                        {this.props.o}
                    </div>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;