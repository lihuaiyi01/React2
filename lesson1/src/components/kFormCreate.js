import React, {Component} from "react";

export default function kFormCreate(Cmp) {
    return class  extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        handleChange = (e) => {
            // setState name value
            let {value} = e.target;
        };
        getFieldDecorator = (field, option) => {
            return InputCmp => {
                // 克隆一份
                return React.cloneElement(InputCmp, {
                    value: this.state[field] || "",
                    onChange: this.handleChange
                });
            };
        };
        render() {
            return (
                <div className="border">
                    <Cmp getFieldDecorator={this.getFieldDecorator} />
                </div>
            );
        }
    };
}