import React from 'react';

const Name = (props) => {

    return (
        <div>

            <br />

                <label htmlFor="Name">Name: </label>
                <input type="Text" name="Name" id="Name" ref={props.nameValidation} className="formName"/>

            <br />

        </div>
    )
}

export default Name