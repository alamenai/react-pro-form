export const isValidatedForm = (state) => {
    const { email, fullname, password } = state
    return isEmail(email) && username.isValidated(fullname) && isPassword(password)
}

export const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const username = {
    isValidated: (name) => {
        return !username.isShort(name) && !username.hasDigit(name)
    },
    isShort: (name) => {
        return name.length < 6
    },
    hasDigit: (username) => {
        const re = /\d/;
        return re.test(username.toLowerCase());
    }
}

export const isPassword = (password) => {
    return password.length > 8
}

export const isEmpty = (text) => {
    return text.length === 0
}