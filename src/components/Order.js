import React from 'react';

const Order = (props) => {

    console.log(props.order)

    return (

        <div>
            {props.order.name}
        </div>
        
    )
}

export default Order