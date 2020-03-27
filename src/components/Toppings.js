import React from 'react';

const Toppings = (props) => {

    return (
        <div>

            <br />
            <div>

                <h3>Fruit and Veggies</h3>
                <div className="toppings1">
                    <label htmlFor="Pineapple">Pineapple</label>
                    <input type="checkbox" name="Toppings" value="Pineapple" id="Pineapple" ref={props.notRequired} className="check1"/>
                    <br/>

                    <label htmlFor="Tomato">Tomato</label>
                    <input type="checkbox" name="Toppings" value="Tomato" id="Tomato" ref={props.notRequired} className="check2"/>
                    <br/>

                    <label htmlFor="Jalapenos">Jalapenos</label>
                    <input type="checkbox" name="Toppings" value="Jalapenos" id="Jalapenos" ref={props.notRequired} className="check3"/>
                    <br/>

                    <label htmlFor="Banana Peppers">Banana Peppers</label>
                    <input type="checkbox" name="Toppings" value="Banana Peppers" id="Banana Peppers" ref={props.notRequired} className="check4"/>
                    <br/>

                    <label htmlFor="Onions">Onions</label>
                    <input type="checkbox" name="Toppings" value="Onions" id="Onions" ref={props.notRequired} className="check5"/>
                    <br/>

                    <label htmlFor="Black Olives">Black Olives</label>
                    <input type="checkbox" name="Toppings" value="Black Olives" id="Black Olives" ref={props.notRequired} className="check6"/>
                    <br/>
                </div>


            </div>

            <div>

                <h3>Meats</h3>
                <div className="toppings2">

                    <label htmlFor="Pepperoni">Pepperoni</label>
                    <input type="checkbox" name="Toppings" value="Pepperoni" id="Pepperoni" ref={props.notRequired} className="check7"/>
                    <br/>

                    <label htmlFor="Beef">Beef</label>
                    <input type="checkbox" name="Toppings" value="Beef" id="Beef" ref={props.notRequired} className="check8"/>
                    <br />

                    <label htmlFor="Bacon">Bacon</label>
                    <input type="checkbox" name="Toppings" value="Bacon" id="Bacon" ref={props.notRequired} className="check9"/>
                    <br/>

                    <label htmlFor="Ham">Ham</label>
                    <input type="checkbox" name="Toppings" value="Ham" id="Ham" ref={props.notRequired} className="check10"/>
                    <br/>

                    <label htmlFor="Chicken">Chicken</label>
                    <input type="checkbox" name="Toppings" value="Chicken" id="Chicken" ref={props.notRequired} className="check11"/>
                    <br/>

                    <label htmlFor="Salami">Salami</label>
                    <input type="checkbox" name="Toppings" value="Salami" id="Salami" ref={props.notRequired} className="check12"/>
                    <br/>

                    <label htmlFor="Anchovy">Anchovy</label>
                    <input type="checkbox" name="Toppings" value="Anchovy" id="Anchovy" ref={props.notRequired} className="check12"/>
                    <br/>

                </div>


            </div>


        </div>
    )
}

export default Toppings