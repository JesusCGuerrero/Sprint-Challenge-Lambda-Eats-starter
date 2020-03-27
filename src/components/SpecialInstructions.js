import React from 'react'

const SpecialInstructions = (props) => {

    return (
        <div className="instructions">
            <br/>
                <label htmlFor="Instructions"><h5>Special Instructions:</h5></label>
                <input type="text" id="instructions" name="Special Instructions" ref={props.notRequired} className="specialInstructions"/>
            <br/>
        </div>
    )
}

export default SpecialInstructions