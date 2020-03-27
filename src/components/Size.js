import React from 'react';

const Size = (props) => {

    return (
        <div>
            <br/>
                <h3>Select your size</h3>
                <select name="Size" type="select" ref={props.required}>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
        </div>
    )
}

export default Size