import React, { useEffect, useState } from 'react';
import '../css/Header.scss';

const Header = ({id}) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if(typeof id !== "undefined"){
            setTitle(setTitleDate(id));
        }else{
            setTitle(setTitleDate(Date.now()));
        }
    }, [id])

    const setTitleDate = (id) => {
        let date = new Date(parseInt(id));
        let formatDate = date.getFullYear() + "-" + 
                        String(date.getMonth() + 1).padStart(2,'0') + "-" + 
                        String(date.getDate()).padStart(2,'0');

        return formatDate;
    }

    return <>
        <h2 className="home_title">{title}</h2>
    </>
}

export default Header;