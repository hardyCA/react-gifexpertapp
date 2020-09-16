import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategoria }) => {

    const [inpuntValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inpuntValue.trim().length > 2) {
            setCategoria(cats => [inpuntValue, ...cats])
            setInputValue('')
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inpuntValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
