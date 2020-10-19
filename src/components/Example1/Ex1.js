import React from "react";

function Count(){
    const [count, setCount] = React.useState(0);

    function increment(){
        setCount(count +1);
    };
    function decrement(){
        setCount(count -1);
    };
    return(
        <div>
            <h1>View: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}
export default Count;