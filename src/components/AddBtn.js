import React from 'react'
import '../css/AddBtn.scss'

const AddBtn = ({eventProps}) => {
    return <>
        <div className="add_btn" onClick={eventProps}>
            +
        </div>
    </>
}

export default AddBtn;