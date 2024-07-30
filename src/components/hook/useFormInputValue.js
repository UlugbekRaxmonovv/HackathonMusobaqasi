import { useState } from "react";
export const useFormInputValue= (initialState) =>{
    const [value, setValue] = useState(initialState);
    const handelChange = e =>{
        const {name,value}= e.target
        setValue(prev =>({...prev,[name]:value}))
    }
    return { value,setValue,handelChange }
}