import React, {Component} from "react";
import ContextTypePage from "./ContextTypePage";
import {ThemeProvider} from "../ThemeContext";

export default class ContextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: "red"
            }
        };
    }
    render() {
        const {theme} = this.state
        return (
            <div>
                <h3>ContextPage</h3>
                <ThemeProvider value={theme}>
                    <ContextTypePage />
                </ThemeProvider>
            </div>
        );
    }
}
