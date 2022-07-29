import PropTypes from 'prop-types'

import { memo } from 'react'

import './ChatboxMessage.css'

const ChatboxMessage = ({ from, text, img }) => {
    return (       
        <div className={`message${from}`}>
            <img src={img} alt=""/>
            <p>{text}</p>
        </div>
    )
}

ChatboxMessage.propTypes = {
    from: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string
}

export default memo(ChatboxMessage)