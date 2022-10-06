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
            </div>

            <div className='post-info'>

            </div>

            <div className='post-viewcomments'>

            </div>

            <div className='post-timestamp'>

            </div>

            <div className='post-addcomment'>

            </div>
        </div>
    )
}