import './Post.css'

export default function Post(){
    return(
        <div className='post-container'>
            <div className='post-header'>
                <img className='post-user-icon' src='./images/placeholder-user.png'></img>
                <p className='post-username'>Username</p>
            </div>

            <div className='post-content'>
                <img className='post-image' src='./images/samplepost.png'></img>
            </div>

            <div className='post-controls'>
                <img className='post-like' src='./images/heart.png'></img>
                <img className='post-comment' src='./images/bubble-chat.png'></img>
                <img className='post-share' src='./images/send.png'></img>
            </div>

            <p className='post-info'>Liked by user and ... more</p>

            <p className='post-viewcomments'>View all ... comments</p>

            <p className='post-timestamp'>2 days ago</p>

            <div className='post-addcomment'>

            </div>
        </div>
    )
}