import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={style.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
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