import PostComment from '../PostComment/PostComment'
import { BottomPost } from '../Post/Post'
import '../PostPopup/PostPopup.css'
import { useEffect, useState } from 'react'

export default function PostPopup(props){
    const [postAuthor, setPostAuthor] = useState({name: 'placeholder'})

    function handleUser(){
        return props.getUser(props.post.uid)
    }

    useEffect(() => {
        handleUser().then(thing => setPostAuthor(thing))
    },[])
    return(
        <div className="postpopup-container-bg" onClick={props.resetViewedPost}>

            <div className='postpopup-container' onClick={e => e.stopPropagation()}>

                <img className='postpopup-content' src={props.post.content}></img>

                <div className='postpopup-sidebar-container'>

                    <div className='postpopup-sidebar-header'>
                        <img className='postpopup-icon' src={postAuthor.pfp ? postAuthor.pfp: './images/placeholder-user.png'}></img>
                        <p className='postpopup-username'>{postAuthor.name}</p>
                    </div>

                    <div className='postpopup-commentsection'>
                        {props.post.comments.map(comment => {
                            return <PostComment key={comment.id} getUser={props.getUser} comment={comment}></PostComment>
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
                            <p className='post-caption-username'>{postAuthor.name}</p>
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