import React, {Component} from "react";
import kFormCreate from "../components/kFormCreate";

@kFormCreate
class MyFormPage extends Component {
    submit = () => {
        console.log("submit");
    };
    render() {
        console.log("props", this.props);
        const {getFieldDecorator} = this.props;
        return (
            <div>
                <h3>MyFormPage</h3>
                {getFieldDecorator("name", {})(
                    <input type="text" placeholder="please input ur name" />
                )}
                <input type="password" placeholder="please input ur password" />
                <button onClick={this.submit}>提交</button>
            </div>
        );
    }
}

export default  MyFormPage;
