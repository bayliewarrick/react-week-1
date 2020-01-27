import React,{Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ctr: 0
        }

        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement = () => {
        this.setState({
            ctr: this.state.ctr + 1
        })
    }

    render() {
        return (
            <div>
                    
                <button onClick={this.handleIncrement}>
                <h1>{this.state.ctr}</h1>
                    <img src="./angery.png" alt="angry react" height='25px'></img>
                </button>
            </div>
        )
    }

}

export default Counter;