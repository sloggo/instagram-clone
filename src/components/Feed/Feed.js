import Post from '../Post/Post'
import './Feed.css'

export default function Feed(props){
    return(
        <div className='feed-container'>
            {props.currentFeed.map(post => {
                return <Post key={post.id} getUser={props.getUser} post={post} viewPost={props.viewPost}></Post>
            })}
        </div>
    )
}