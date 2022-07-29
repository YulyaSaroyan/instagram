import PropTypes from 'prop-types'

import { memo } from "react"

import './HomePostComment.css'

const HomePostComment = ({ username, comment }) => {
    return (
        <p>
            <span>{username} </span>

            {comment}
        </p>
    )
}

HomePostComment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default memo(HomePostComment)