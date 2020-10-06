import React from 'react';

const FormArea = () => {
    return <>
        <form>
            <input className="input__box" type="text" placeholder="Write ToDo..."/>
            <button className="input__btn">ADD</button>
        </form>
    </>
}

export default FormArea;