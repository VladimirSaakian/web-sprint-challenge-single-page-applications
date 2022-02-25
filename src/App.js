import React, {useState} from "react";
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import OrderForm from './components/OrderForm'

import Schema from './components/formValidation'

const initialPizzaOrder= {
  name:'',
  size: '',
  cheese: false,
  pepperoni: false,
  vegetables: false,
  instructions: ''
}

const initialErrors = {
  name:'',
  size: '',
  cheese: '',
  pepperoni: '',
  vegetables: '',
  instructions: '' 
}

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder)
  const [errors, setErrors]= useState(initialErrors) 
  
  const validation= (name, value) => {
    yup.reach(Schema, name)
    .validate(value)
    .then(()=> setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const inputChanges =(name, value) => {
    validation(name,value)
    setPizzaOrder({...pizzaOrder, [name]: value})
  }

  const submit = () => {
    axios.post('https://reqres.in/api/orders')
    .then(res => {
      console.log(res)
    setPizzaOrder(initialPizzaOrder)
    setErrors(initialErrors)
  })
    
  }

  return (
    <>
    <header>
      <Link to= '/'> HOME </Link> 
      <Link id="order-pizza" to ='/pizza'>ORDER</Link>
      </header>'
      <h1>Lambda Eats</h1>
   
      <div>
      <Route exact path= '/'>
        
      </Route>
      <Route path = '/pizza'>
        <OrderForm 
        pizzaOrder= {pizzaOrder}
        change = {inputChanges}
        submit = {submit}
        errors= {errors}
        />
      </Route>
      </div>
    </>
  );
};
export default App;


