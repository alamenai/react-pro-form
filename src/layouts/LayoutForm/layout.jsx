import React from "react"

const FormLayout = ({ children }) => (
    <div className="rounded-xl px-12 pt-4 pb-16 bg-gray-100 w-1/3
                    xs:px-6 xs:w-full xs:mx-2 xs:mt-2
                    sm:px-12 sm:w-full sm:mx-32 sm:mt-2
                    md:px-12 md:w-full md:mx-48 md:mt-2">
        {children}
    </div>
)

export default FormLayout