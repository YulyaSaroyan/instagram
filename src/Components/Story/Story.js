import PropTypes from 'prop-types'

import { memo } from 'react'

import './Story.css'

const Story = ({ img, username, sliding, prev, next }) => {
    return (
        <div className="Story" style={prev ? {transform: `translate(${sliding}px)`} : next ? {transform: `translate(${sliding}px)`} : {transform: `translate(0px)`}}>
            <img alt="" width={64} height={64} src={img}/>
            <span>{username}</span>
        </div>
    )
}

Story.propTypes = {
    img: PropTypes.string,
    username: PropTypes.string,
    sliding: PropTypes.number,
    prev: PropTypes.bool,
    next: PropTypes.bool
}

export default memo(Story)