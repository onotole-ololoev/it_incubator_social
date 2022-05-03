import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {PostsType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    posts: PostsType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;