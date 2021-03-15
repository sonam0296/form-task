import React, { Fragment, useState } from 'react'
import Form from './Form'

const Count=()=>{

const [count, setCount] = useState(0);
    return(
        <>
        <div>
            <h2>Users {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                 Click me
            </button>
        </div>

    <Form/> 
    </>
        
    )
}


export default Count



// mdn javascript 
// react website
// tutorials

