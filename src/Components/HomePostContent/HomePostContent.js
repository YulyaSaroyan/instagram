import PropTypes from 'prop-types'

import './HomePostContent.css'

const HomePostContent = ({ img }) => {
    return (
        <div className="PostContent">
            <img src={img} alt=""/>
        </div>
    )
}

HomePostContent.propTypes = {
    img: PropTypes.string
}

export default HomePostContent