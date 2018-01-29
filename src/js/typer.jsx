import React from "react";
import Typed from "typed.js";

export class TypedReact extends React.Component {

    componentDidMount() {
        const {strings} = this.props;
        const options = {
            strings: strings,
            typeSpeed: 65,
            backSpeed: 35
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (<span style={{marginLeft: '10px'}} ref={(el) => {
                this.el = el;
            }}/>
        );
    }
}