import React from "react"
import { TextfieldDefault as PasswordField } from "../lib/Textfield"
import { TextDefault as PasswordHint } from "../lib/Text"
import { isPassword, isEmpty } from "./helpers/validation"
import withLabel from "./withLabel";


class Password extends React.Component {

    static placeholder = "••••••••••"
    static labelText = "Password"
    static hint = "Make sure it's at least 8 characters."
    static InvalidatedPasswordMessage = "Password is too short"

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false
        }
    }


    onChange = (e) => {
        const text = e.target.value;
        this.props.onType("password", text)
        const { onDefault, onSuccess } = this.onChangeStyle
        if (isPassword(text)) {
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
        if (!isPassword(text)) {
            onError()
        }
    }


    render() {

        const { style, hasError } = this.state
        return <div>
            <PasswordField
                type="password"
                placeholder={Password.placeholder}
                value={this.props.input}
                classes={`mt-1 mb-1 ` + style}
                onChange={this.onChange}
                onBlur={this.onBlur} />
            <PasswordHint
                content={hasError ? Password.InvalidatedPasswordMessage : Password.hint}
                classes={hasError ? `text-red-500 bg-red-100 text-xs` : `text-xs`} />
        </div>
    }
}

export default withLabel(Password)