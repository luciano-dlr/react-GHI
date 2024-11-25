import { ChangeEvent, useState } from "react";



export const useForm = <T>(initualState: T) => {

    const [formData, setFormData] = useState(initualState)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        const { name, value } = event.target
        setFormData(oldFormData => ({
            ...oldFormData,
            [name]: value
        }))
    }


    return {
        ...formData,
        handleOnChange,
        formData
    }
}
