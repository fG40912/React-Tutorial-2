// import React, { useState, useEffect } from "react";

// export default function App() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//     const [resourceType, setResourceType] = useState('posts')
//     const [items, setItems] = useState([])

//     function updateWindowWidth() {
//         setWindowWidth(() => window.innerWidth)
//     }

//     useEffect(() => {
//         window.addEventListener('resize',updateWindowWidth)

//         return () => {
//             window.removeEventListener('resize', updateWindowWidth)
//         }
//     }, [])

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then(reponse => reponse.json())
//         .then(json => setItems(json))
//     }, [resourceType])

//     return(
//         <>
//             <h1>{windowWidth}</h1>
//             <button onClick={() => setResourceType('posts') }>Posts</button>
//             <button onClick={() => setResourceType('users') }>Users</button> 
//             <button onClick={() => setResourceType('comments') }>Comments</button> 
//             <h1>{ resourceType }</h1>
//             {items.map(item => <pre>{JSON.stringify(item)}</pre>)}
//         </>
//     )
// }