import React from 'react'

const OrderForm= (props) => {
    const {pizzaOrder, change, submit, errors} =props

    const onChange= (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse= type==='checkbox' ? checked: value;
        change(name, valueToUse)
    }

    const onSubmit = (evt) => {


        submit()
    }
    return(
        <>
        <form id="pizza-form" onSubmit= {onSubmit}> 
            <div className="error-container">
                <div>{errors.name}</div>
            </div>
            <div className="order-basics">
                <label>Name
                    <input id="name-input" 
                    name= "name"
                    type= "text"
                    onChange = {onChange}
                    value= {pizzaOrder.name}
                    />
                </label>
                <label>Size
                    <select id= "size-dropdown"
                    onChange= {onChange}
                    value={pizzaOrder.size}
                    name = 'size'>
                        <option value= ''>--Select --</option>
                        <option value= 'small'>small</option>
                        <option value = 'medium'>medium</option>
                        <option value = 'large'>large</option>
                    </select>
                </label>
            </div>
            <div id="toppings-checklist">
                <h4> Toppings </h4>
                    <label> Cheese
                        <input 
                        type= "checkbox"
                        name = "cheese"
                        checked = {pizzaOrder.cheese}
                        onChange={onChange}
                        />
                    </label>

                    <label>Pepperoni
                        <input 
                        type= "checkbox"
                        name = "pepperoni"
                        checked = {pizzaOrder.pepperoni}
                        onChange={onChange}
                        />
                    </label>

                    <label>Vegetables
                        <input 
                        type= "checkbox"
                        name = "vegetables"
                        checked = {pizzaOrder.vegetables}
                        onChange={onChange}
                        />
                    </label>
                    <label>Sauce
                        <input 
                        type= "checkbox"
                        name = "sauce"
                        checked = {pizzaOrder.sauce}
                        onChange={onChange}
                        />
                    </label>
            </div>
            <div className="special-instructions">
                <label>INSTRUCTIONS
                    <input id="special-text"
                    name= "instructions"
                    type= "text"
                    onChange={onChange}
                    value= {pizzaOrder.instructions}
                    />
                </label>
            </div>
            <div id="button">
                <button id="order-button">Add To Order</button>

            </div>

        </form>
        </>
    )

}


export default OrderForm