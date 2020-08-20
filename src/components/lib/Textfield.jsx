import React from "react"
import PropTypes from "prop-types"

const Textfield = ({ type, placeholder, classes, value, onChange, onBlur }) => {

    return <input
        className={classes}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlurCapture={onBlur} />
}

const TextfieldDefault = (props) => {
    let defaultClasses = "w-full bg-white border outline-none h-12 font-helvetica text-base rounded-sm tracking-wider px-4 py-2 focus:shadow-outline-sm"
    return renderTextfield(props, defaultClasses)
}

const renderTextfield = (props, defaultClasses) => {
    const { classes } = props
    return <Textfield {...props} classes={defaultClasses + " " + classes} />
}

Textfield.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    classes: PropTypes.string

}


export { TextfieldDefault } 