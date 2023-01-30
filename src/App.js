import React, { useState } from "react";

export default function App() {
    const [resourceType, setResourceType] = useState('Posts')

    return(
        <>
            <button onClick={() => setResourceType('Posts') }>Posts</button>
            <button onClick={() => setResourceType('Users') }>Users</button> 
            <button onClick={() => setResourceType('Comments') }>Comments</button> 
            <h1>{ resourceType }</h1>
        </>
    )
}