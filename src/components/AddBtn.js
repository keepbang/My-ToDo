import { Icon, Intent } from '@blueprintjs/core'
import React from 'react'
import '../css/AddBtn.scss'

const AddBtn = ({eventProps}) => {
    return <>
        <div className="add_btn" onClick={eventProps}>
            <Icon icon="add-to-artifact" iconSize={Icon.SIZE_LARGE} intent={Intent.NONE}/>
        </div>
    </>
}

export default AddBtn;