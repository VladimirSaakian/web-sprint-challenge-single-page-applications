import * as yup from 'yup'

const FormSchema= yup.object().shape ({
    name: yup.string().required("name required to place order").min(2, "name must be at least 2 characters"),
    size: yup.string().required().oneOf(['small', 'medium', 'large',], 'Selection required'),
    cheese: yup.boolean(),
    pepperoni:yup.boolean(),
    vegetables: yup.boolean(),
    sauce: yup.boolean(),
    instructions: yup.string()
})

export default FormSchema