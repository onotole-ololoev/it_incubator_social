import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/04/25/00/24/beach-2258255_960_720.jpg" alt="beach"/>
            </div>
            <div className={style.profileBlock}>
                ava + discr
            </div>
        </div>
    );
};

export default ProfileInfo;