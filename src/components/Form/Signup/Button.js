import React from "react"
import { ButtonBrand as SignUpButton } from "../../lib/Button"
import { disabledContext } from "./index"



class SignUp extends React.Component {

    static type = "submit"
    static value = "Sign up for Gitbank"

    render() {
        return (<disabledContext.Consumer >{
            ({ disabled }) => (<SignUpButton
                type={SignUp.type}
                value={SignUp.value}
                disabled={disabled}
                classes="font-semibold text-white mt-10" />)
        }
        </disabledContext.Consumer>)
    }
}

export default SignUp