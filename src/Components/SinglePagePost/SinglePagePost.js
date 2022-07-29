import PropTypes from 'prop-types'

import { memo } from "react"
import { useDispatch } from "react-redux"

import { deletePosts } from "../../store/features/users/usersSlice"
import { deletePostsInGeneralPage } from "../../store/features/posts/postsSlice"

import { FiDelete } from 'react-icons/fi'

import './SinglePagePost.css'

const SinglePagePost = ({ url, id }) => {

    const dispatch = useDispatch()

    return (
        <div className="imgWrapper">
            <img src={url} alt=""/>
            <FiDelete onClick={() => {
                dispatch(deletePosts({ id }))
                dispatch(deletePostsInGeneralPage({ id }))
            }}/>
        </div> 
    )
}

SinglePagePost.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number
}

export default memo(SinglePagePost)