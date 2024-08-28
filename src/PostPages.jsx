import React, { useContext } from 'react'
import {useParams,Link} from 'react-router-dom'
import DataContext from './context/DataContext';
const PostPages = () => {
  const {posts,handleDelete,handleEdit}=useContext(DataContext);
  const {id}=useParams();
  const post=posts.find(post=>(
    (post.id).toString()==id ))
  return (
    <article className='PostPage'>
     {post &&
     <>
     <h2>{post.title}</h2> 
     <p>{post.datetime}</p>
     <p>{post.body}</p>
     <button onClick={()=>{handleDelete(post.id)}}>Delete Post</button>
    <Link to={`/edit/${post.id}`} ><button>Edit Post</button></Link> 

     </>
}
{
  !post && <>
    <h2>Post not found</h2>
  </>
}
    </article>
  )
}

export default PostPages
