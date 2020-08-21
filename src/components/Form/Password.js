import React, { Fragment } from "react"
import { TextfieldDefault as PasswordField } from "../lib/Textfield"
import { TextDefault as PasswordHint } from "../lib/Text"
import { TextDefault as PasswordError } from "../lib/Text"
import { isPassword, isEmpty } from "./helpers/validation"
import withLabel from "./withLabel"


class Password extends React.Component {

    static placeholder = "••••••••••"
    static labelText = "Password"


    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false,
            isSatisified: false,
            invalidatedPasswordMessage: "",
            hint: {
                text: "Make sure it's at least",
                requirement: "8 characters."
            }
        }
    }

    onChange = (e) => {
        const text = e.target.value;
        this.props.onType("password", text)
        const { onDefault, onSuccess } = this.onChangeStyle
        if (isPassword(text)) {
            this.setState({ isSatisified: true })
            onSuccess()
            return
        }

        this.setState({ isSatisified: false })
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
            this.setState({ invalidatedPasswordMessage: "This password is too short" })
        }
    }


    render() {

        const { style, hasError } = this.state
        return <div>
            <PasswordField
                id="password"
                type="password"
                placeholder={Password.placeholder}
                value={this.props.input}
                classes={`mt-1 mb-1 ` + style}
                onChange={this.onChange}
                onBlur={this.onBlur} />

            <div className="flex">
                {(!hasError &&
                    <Fragment>
                        <PasswordHint
                            content={this.state.hint.text}
                            classes={`text-xs`} />
                        <PasswordHint
                            content={this.state.hint.requirement}
                            classes={(this.state.isSatisified ? `text-green-500` : `text-gray-900`) + ` text-xs font-bold ml-1`} />
                    </Fragment>) ||
                    <PasswordError
                        content={this.state.invalidatedPasswordMessage}
                        classes={`text-red-500 bg-red-100 text-xs`} />}
            </div>
        </div>
    }
}

export default withLabel(Password)