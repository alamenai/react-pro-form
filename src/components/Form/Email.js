import React from "react"
import { TextfieldDefault as EmailField } from "../lib/Textfield"
import { TextDefault as EmailLabel } from "../lib/Text"
import { isEmail, isEmpty } from "./helpers/validation"


class Email extends React.Component {

    static placeholder = "You@example.com";
    static label = "Email";
    static InvalidatedEmailMessage = "You've entered a wrong email syntax"

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false
        }
    }

    onChange = (e) => {
        const text = e.target.value;
        this.props.onType("email", text)
        const { onDefault, onSuccess } = this.onChangeStyle
        if (isEmail(text)) {
            onSuccess()
            return
        }
        onDefault()
    }

    onChangeStyle = {
        onSuccess: () => {
            this.setState({
                style: 'border-green-500 bg-green-100 focus:shadow-none',
                hasError: false
            })
        },
        onError: () => {
            this.setState({
                style: 'border-red-400 bg-red-100 focus:shadow-none',
                hasError: true
            })
        },
        onDefault: () => {
            this.setState({
                style: 'bg-white focus:shadow-outline-sm',
                hasError: false
            })
        }
    }

    onBlur = (e) => {
        const text = e.target.value;
        const { onError, onDefault } = this.onChangeStyle
        if (isEmpty(text)) {
            onDefault()
            return
        }
        if (!isEmail(text)) {
            onError()
        }
    }

    render() {
        const { style, hasError } = this.state
        return (<div>
            <EmailLabel
                content={Email.label}
                classes="font-semibold text-sm" />
            <EmailField
                type="email"
                placeholder={Email.placeholder}
                value={this.props.input}
                classes={`mt-1 mb-1 ` + style}
                onChange={this.onChange}
                onBlur={this.onBlur} />
            {
                hasError && <p className="text-xs text-red-500 font-helvetica bg-red-100">{Email.InvalidatedEmailMessage}</p>
            }

        </div>)
    }
}

export default Email