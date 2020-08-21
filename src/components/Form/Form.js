import React from "react"
import FormLayout from "../../layouts/LayoutForm"
import EmailField from "./Email"
import PasswordField from "./Password"
import UsernameField from "./Username"
import SignUpButton from "./Signup"
import { disabledContext } from "./Signup"
import { isValidatedForm } from "./helpers/validation"

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            fullname: "",
        }
    }

    onType = (field, input) => this.setState({ [field]: input })

    render() {
        const { email, fullname, password } = this.state
        return <FormLayout>
            <disabledContext.Provider value={{ disabled: !isValidatedForm(this.state) }}>
                <EmailField input={email} onType={this.onType} />
                <UsernameField input={fullname} onType={this.onType} />
                <PasswordField input={password} onType={this.onType} />
                <SignUpButton />
            </disabledContext.Provider>
        </FormLayout>
    }
}

export default Form