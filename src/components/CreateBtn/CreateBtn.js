import React , { Component }from 'react'
import PropTypes from 'prop-types'

const CreateBtn = ({onClick, name, theme}) => {
    return(
        <>
        <button 
            class ={`${theme}`}
            onClick={(e) => onClick()}
            // onClick={this.props.callback}

        >
            {name}
        </button>
    </>
    )
}

CreateBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default CreateBtn