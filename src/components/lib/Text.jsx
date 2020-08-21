import React from "react"
import PropTypes from "prop-types"

const Text = ({
    htmlFor,
    content,
    classes }) => {
    return <label htmlFor={htmlFor} className={classes}>{content}</label>
}

const TextDefault = (props) => {
    let defaultClasses = "tracking-wide font-helvatica text-gray-800"
    return <Text {...props} classes={defaultClasses + " " + props.classes} />
}

Text.propTypes = {
    content: PropTypes.string.isRequired,
    classes: PropTypes.string

}

export { TextDefault }