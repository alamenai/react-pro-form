import React from "react"
import { TextDefault as Label } from "../lib/Text"

const withLabel = Field => {
    class withLabel extends React.Component {
        render() {
            return <div>
                <Label
                    content={Field.labelText}
                    classes="font-semibold text-sm" />
                <Field />
            </div>
        }
    }
    return withLabel
}

export default withLabel