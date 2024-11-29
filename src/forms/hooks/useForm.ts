import { ChangeEvent, useState } from "react";



export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        const { name, value } = event.target
        setFormData(oldFormData => ({
            ...oldFormData,
            [name]: value
        }))
    }

    const handleReset = () => {
        setFormData({ ...initialState })
    }

    const handleValidateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formData,
        handleOnChange,
        formData,
        handleReset,
        handleValidateEmail
    }
}
