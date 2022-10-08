import PostComment from '../PostComment/PostComment'
import { BottomPost } from '../Post/Post'
import '../PostPopup/PostPopup.css'

export default function PostPopup(props){
    return(
        <div className="postpopup-container-bg" onClick={props.resetViewedPost}>

            <div className='postpopup-container' onClick={e => e.stopPropagation()}>

                <img className='postpopup-content' src={props.post.content}></img>

                <div className='postpopup-sidebar-container'>

                    <div className='postpopup-sidebar-header'>
                        <img className='postpopup-icon' src='./images/placeholder-user.png'></img>
                        <p className='postpopup-username'>{props.post.username}</p>
                    </div>

                    <div className='postpopup-commentsection'>
                        {props.post.comments.map(comment => {
                            return <PostComment key={comment.id} comment={comment}></PostComment>
                        })}
                    </div>
                    
                    <div className='postpopup-sidebar-bottom'>
                        <div className='post-controls'>
                            <img className='post-like' src='./images/heart.png'></img>
                            <img className='post-comment' src='./images/bubble-chat.png'></img>
                            <img className='post-share' src='./images/send.png'></img>
                        </div>

                        <p className='post-info'>Liked by {props.post.likes[0]} and {(props.post.likes.length - 1)} more</p>

                        { props.post.caption && <div className='post-caption-container'>
                            <p className='post-caption-username'>{props.post.username}</p>
                            <p className='post-caption'>{props.post.caption}</p>
                        </div>}

                        <p className='post-timestamp'>{props.post.timestamp} DAYS AGO</p>

                        <div className='post-addcomment'>
                            <div className='post-addcomment-container'>
                                <input className='post-addcomment-input' type='text' placeholder='Add a comment...'></input>
                                <button className='post-addcomment-button' type='submit'>Post</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}