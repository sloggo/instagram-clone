import { useEffect, useState } from 'react'
import './Post.css'

export default function Post(props){
    const [postAuthor, setPostAuthor] = useState({name: 'placeholder'})

    useEffect(() => {
        setPostAuthor(props.getUser(props.post.uid))
    }, [])

    return(
        <div id={props.post.uid} className='post-container'>
            <div className='post-header'>
                <img className='post-user-icon' src={'./images/placeholder-user.png'}></img>
                <p className='post-username'>{postAuthor.name}</p>
            </div>

            <div className='post-content'>
                <img className='post-image' src={props.post.content}></img>
            </div>

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

            <p className='post-viewcomments' onClick={props.viewPost} id={props.post.id}>View all {props.post.comments.length} comments</p>

            <p className='post-timestamp'>{props.post.timestamp} DAYS AGO</p>

            <div className='post-addcomment'>
                <div className='post-addcomment-container'>
                    <input className='post-addcomment-input' type='text' placeholder='Add a comment...'></input>
                    <button className='post-addcomment-button' type='submit'>Post</button>
                </div>
            </div>
        </div>
    )
}