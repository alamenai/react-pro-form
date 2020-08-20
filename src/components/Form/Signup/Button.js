import React from "react"
import { ButtonBrand as SignUpButton } from "../../lib/Button"
import { disabledContext } from "./index"

const type = "submit"
const value = "Sign up for Gitbank"

class SignUp extends React.Component {

    render() {
        return (<disabledContext.Consumer >{
            ({ disabled }) => (<SignUpButton
                type={type}
                value={value}
                disabled={disabled}
                classes="font-semibold text-white mt-10" />)
        }
        </disabledContext.Consumer>)
    }
}

export default SignUp