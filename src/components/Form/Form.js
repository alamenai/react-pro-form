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

    onType = (field, input) => { this.setState({ [field]: input }) }

    render() {
        return <FormLayout>
            <disabledContext.Provider value={{ disabled: !isValidatedForm(this.state) }}>
                <EmailField input={this.state.email} onType={this.onType} />
                <UsernameField input={this.state.fullname} onType={this.onType} />
                <PasswordField input={this.state.password} onType={this.onType} />
                <SignUpButton />
            </disabledContext.Provider>
        </FormLayout>
    }
}

export default Form