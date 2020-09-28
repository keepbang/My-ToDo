import React,{useState} from 'react';

function Home() {
    const [text,setText] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Write ToDo..." value={text}/>
                <button>ADD</button>
            </form>
            <ul>

            </ul>
        </>
    )
}

export default Home;