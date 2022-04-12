import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ-sW4M15i_WrSu2TEMs2ns0MZRnWs5HApQ&usqp=CAU"
                alt="logo"/>
        </header>
    );
};

export default Header;