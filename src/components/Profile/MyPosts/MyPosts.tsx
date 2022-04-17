import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, are you watching TV now?', likesCount: 12},
        {id: 2, message: 'Hi, are you watching TV now?', likesCount: 10},
        {id: 3, message: 'Hi, are you watching TV now?', likesCount: 12},
        {id: 4, message: 'Hi, are you watching TV now?', likesCount: 14},
        {id: 5, message: 'Hi, are you watching TV now?', likesCount: 15},
    ]
    let postsElements = posts.map(p => <Post message={p.message} like={p.likesCount}/>)
    return (
        <div className={style.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
                <div>
                    <button>remove post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;