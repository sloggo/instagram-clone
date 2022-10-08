import './PostComment.css';

export default function PostComment(props){
    return(
        <div className="postcomment-container">

            <img className='postpopup-icon' src='./images/placeholder-user.png'></img>
            <div className='postcomment-info'>
                <div className='postcomment-info-top'>
                    <p className='postpopup-username'>{props.comment.username}</p>
                    <p className='postcomment-comment'>{props.comment.comment}</p>
                </div>
    
                <div className='postcomment-info-bottom'>
                    <p>{props.comment.timestamp}</p>
                    <p className='postcomment-likeinfo'>{props.comment.likes.length} likes</p>
                </div>
            </div>
        </div>
    )
}