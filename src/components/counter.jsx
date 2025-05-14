import { Component } from "react";
import "../styles/counter.css";


class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.count,
        };

        this.update = this.update.bind(this);
    };

    update(change) {
        this.setState(function(state) {
            return {...state, count: state.count + change}
        });
    };

    render() {
        let content = this.state.count;
        const plusSpan = <span className="plusSpan">+</span>

        if (content === 0) {
            return null;
        }

        if (content > 9) {
            content = 9;
        }

        return <p className="counter">{content}{this.state.count <= 9 || plusSpan}</p>
    };
};


export default Counter;