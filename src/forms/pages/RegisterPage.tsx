import { ChangeEvent, FormEvent, useState } from "react"


import "../styles/styles.css"
import { useForm } from "../hooks/useForm"

export const RegisterPage = () => {

    const { formData, handleOnChange } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const { name, email, password1, password2 } = formData


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData);

    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(event) => handleOnChange(event)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) => handleOnChange(event)}

                />
                <input
                    type="password"
                    placeholder="Paswword"
                    name="password1"
                    value={password1}
                    onChange={(event) => handleOnChange(event)}

                />
                <input
                    type="password"
                    placeholder="Confrim Password"
                    name="password2"
                    value={password2}
                    onChange={(event) => handleOnChange(event)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
