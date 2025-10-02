import { Component } from "react";

class Header extends Component {

    surpise() {
        alert("Welcome to Learn Phase");
    }
    render() {
        return(
            <header id="header">
                {this.surpise()}
                <h1 className="title">{this.props.title} To-do List</h1>
            </header>
        )
    }
}

export default Header;