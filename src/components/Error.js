import React from 'react';

const Error = () => {
    return ( 
        <div className="error">
            <img src="imgs/error.svg" alt="loader" />
            <h1>Oops...!!</h1>
            <p>You are slow...</p>
            <p>Cannot reach to Server...!!</p>
        </div>
     );
}
 
export default Error;