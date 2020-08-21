import React from "react"
import PropTypes from "prop-types"

const Button = ({ type, value, onSubmit, classes, disabled }) => {
    return <input
        className={(disabled ? `opacity-50 ` : `opacity-100 `) + classes}
        type={type}
        value={value}
        disabled={disabled}
        onSubmit={onSubmit} />
}

const ButtonBrand = (props) => {
    let extraSmallClasses = "xs:h-12 xs:mt-8 xs:text-sm "
    let smallClasses = "sm:h-12 sm:mt-10 sm:text-sm "
    let mediumClasses = "md:h-16 md:mt-12 md:text-base "
    let defaultClasses = "w-full text-white bg-brand border outline-none h-16 font-helvetica text-base rounded-lg tracking-wider px-4 py-2 mt-10 focus:shadow-outline-sm cursor-pointer"
    let allClasses = extraSmallClasses.concat(smallClasses).concat(mediumClasses).concat(defaultClasses)
    return <Button {...props} classes={allClasses} />
}



Button.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    classes: PropTypes.string

}

export { ButtonBrand } 