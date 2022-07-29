import PropTypes from 'prop-types'

import { withLessMore } from '../../HOC/withLessMore'

import HomePostComment from '../HomePostComment/HomePostComment'

import './HomePostComments.css'

const HomePostComments = withLessMore(({ comments, isShow, isShowHandler }) => {
    return (
        <>
            {
                !!comments.length && <div className="HomePostComments">
                    {
                        isShow ? (
                            <div className="HomePostComment">
                                {
                                    comments.map(comment => <HomePostComment key={comment.id} username={comment.username} comment={comment.comment}/>)
                                }
                                <span className="viewLessComments" onClick={() => isShowHandler()}>veiw less</span>
                            </div>
                        ): <span className="viewAllComments" onClick={() => isShowHandler()}>veiw all comments...</span> 
                    }
                </div>
            }
        </>
    )
})

HomePostComments.propeTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    isShow: PropTypes.bool,
    isShowHandler: PropTypes.func
}

export default HomePostComments