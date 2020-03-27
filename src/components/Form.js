import React from 'react'
import Toppings from './Toppings'
import Size from './Size'
import Sauce from './Sauce'
import SpecialInstructions from './SpecialInstructions'
import Name from './Name'
import { Link } from 'react-router-dom'

const Form = (props) => {

    return (

        <div>
            <Link to="/">
                <button>Home</button>
            </Link>

            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <Name nameValidation={props.nameValidation}/>
                <Toppings notRequired={props.notRequired}/>
                <Size required={props.required}/>
                <Sauce required={props.required}/>
                <SpecialInstructions notRequired={props.notRequired}/>
                <br/>
                {/* <Link to="/pizza/order"> */}
                  <button className="finish">Finish</button>
                {/* </Link> */}
            </form>

        </div>

    )
}

export default Form