import React from 'react';

const Clear = (props) => {
    return (
        <button onClick={props.clearComplete}>Clear Completed Tasks</button>
    )
}

export default Clear;