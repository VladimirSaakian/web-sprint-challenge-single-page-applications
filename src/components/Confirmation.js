import React from 'react'
import {Route} from 'react-router-dom'
import OrderForm from './OrderForm'


const Confirmation = () => {

    return (
        <>
        <div>
            <Route path = '/pizza'>
                <OrderForm />
            </Route>
        </div> 
       </>
    )
}

export default Confirmation