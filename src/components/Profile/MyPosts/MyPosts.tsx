import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message='Hi, are you watching TV now?' />
            <Post message='It was really snowy tomorrow' />
            <Post message='what about my money, man????' />
        </div>
    );
};

export default MyPosts;