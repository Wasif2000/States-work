import React, { useState, useEffect } from 'react'

const Effecuse = () => {
    const [count, setCount] = useState(0); // Initialize count as a number

    useEffect(() => {
        console.log('useEffect is triggered');
        // This effect runs only once on component mount
    }, []); // Empty dependency array to run only once

    const counter = () => {
        setCount(prevCount => prevCount + 1); // Update count when button is clicked
    }

    return (
        <>
            <div>
                You clicked {count} times
                <button onClick={counter}>Click me</button>
            </div>
        </>
    )
}

export default Effecuse;
