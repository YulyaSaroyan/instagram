import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useRef } from 'react'

import { addComments } from '../../store/features/posts/postsSlice'
import { selectUsers } from '../../store/features/users/usersSlice'

import { BsEmojiSmile } from 'react-icons/bs'

import './HomePostMakeAComment.css'

const HomePostMakeAComment = ({ id }) => {

    const formRef = useRef(null)
    const dispatch = useDispatch()
    const currentUser = useSelector(selectUsers).currentUser

    const handleSubmit = useCallback(e => {
        e.preventDefault()

        if(formRef.current[0].value.trim() !== '') {
            dispatch(addComments({id, comment: formRef.current[0].value, username: currentUser.username}))
        }

        formRef.current[0].value = ''

    }, [])

    return (
        currentUser && <div className="PostMakeAComment">
            <BsEmojiSmile/>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input placeholder="Add a comment..."/>
                <button>Share</button>
            </form>
        </div>
    )
}

HomePostMakeAComment.propTypes = {
    id: PropTypes.number
}

export default HomePostMakeAComment