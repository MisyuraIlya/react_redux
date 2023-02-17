import React, {useState} from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    // const {data: posts, error , isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit,{
    //     pollingInterval:1000
    // })

    const {data: posts, error , isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {error: createError, isLoading:createLoading}] = postAPI.useCreatePostMutation({

    })
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body:title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    return (
        <div>
            <button onClick={() => handleCreate()}>add new post</button>
            {isLoading && <h1>Loading</h1>}
            {error && <h4>{'error'}</h4>}
            {posts?.map(post => 
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}

                <button onClick={() => refetch()}>refetch</button>
        </div>
    );
};

export default PostContainer;