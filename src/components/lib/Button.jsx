import React from "react"
import PropTypes from "prop-types"

const Button = ({ type, value, event, classes, disabled }) => {
    return <input
        className={(disabled ? `opacity-50 ` : `opacity-100 `) + classes}
        type={type}
        value={value}
        disabled={disabled}
        onChange={event} />
}

const ButtonDefault = (props) => {
    let defaultClasses = "w-full bg-gray-400 border outline-none h-12 font-helvetica text-base rounded-sm tracking-wider px-4 py-2 focus:outline-none"
    return renderButton(props, defaultClasses)
}

const ButtonBrand = (props) => {
    let defaultClasses = "w-full bg-brand border outline-none h-16 font-helvetica text-base rounded-lg tracking-wider px-4 py-2 focus:shadow-outline-sm cursor-pointer"
    return renderButton(props, defaultClasses)
}

const renderButton = (props, defaultClasses) => {
    const { classes } = props
    return <Button {...props} classes={defaultClasses + " " + classes} />
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    classes: PropTypes.string

}

export { ButtonDefault, ButtonBrand } 