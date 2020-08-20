import React from "react"
import { TextfieldDefault as UsernameField } from "../lib/Textfield"
import { username, isEmpty } from "./helpers/validation"
import withLabel from "./withLabel";


class Username extends React.Component {

    static placeholder = "Menai Ala Eddine"
    static labelText = "Username"

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false,
            InvalidatedUsernameMessage: ""
        }
    }

    onChange = (e) => {
        const text = e.target.value;
        this.props.onType("fullname", text)
        const { onDefault, onSuccess } = this.onChangeStyle
        if (username.isValidated(text)) {
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

        if (username.isShort(text)) {
            this.setState({ InvalidatedUsernameMessage: "Username is too short" })
            onError()
        }

        if (username.hasDigit(text)) {
            this.setState({ InvalidatedUsernameMessage: "Username should not contains numbers" })
            onError()
        }
    }

    render() {

        const { style, hasError, InvalidatedUsernameMessage } = this.state
        return (
            <div>
                <UsernameField
                    type="text"
                    value={this.props.input}
                    placeholder={Username.placeholder}
                    classes={`mt-1 mb-1 ` + style}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
                {
                    hasError && <p className="text-xs text-red-500 font-helvetica bg-red-100">{InvalidatedUsernameMessage}</p>
                }

            </div>
        )
    }
}

export default withLabel(Username)