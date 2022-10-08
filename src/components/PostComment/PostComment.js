import './PostComment.css';
import { useEffect, useState } from 'react'

export default function PostComment(props){
    const [postAuthor, setPostAuthor] = useState({name: 'placeholder'})

    function handleUser(){
        return props.getUser(props.comment.uid)
    }

    useEffect(() => {
        handleUser().then(thing => setPostAuthor(thing))
    },[])

    return(
        <div className="postcomment-container">

            <img className='postpopup-icon' src={postAuthor.pfp ? postAuthor.pfp: './images/placeholder-user.png'}></img>
            <div className='postcomment-info'>
                <div className='postcomment-info-top'>
                    <p className='postpopup-username'>{postAuthor.name}</p>
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