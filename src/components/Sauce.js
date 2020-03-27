import React from 'react';

const Sauce = (props) => {

    return (
        <div>
            <br />
            <h3>Select your sauce</h3>
            <label htmlFor="Premium Marinara">Premium Marinara</label>
            <input type="radio" name="Sauce" value="Premium Marinara" id="Premium Marinara" ref={props.required}/>
            <br />
            <label htmlFor="Alfredo">Alfredo</label>
            <input type="radio" name="Sauce" value="Alfredo" id="Alfredo" ref={props.required} className="radio1"/>
            <br />
            <label htmlFor="Buffalo">Buffalo</label>
            <input type="radio" name="Sauce" value="Buffalo" id="Buffalo" ref={props.required}/>
            <br />
            <label htmlFor="Ranch">Ranch</label>
            <input type="radio" name="Sauce" value="Ranch" id="Ranch" ref={props.required}/>
            <br />
        </div>
    )
}

export default Sauce