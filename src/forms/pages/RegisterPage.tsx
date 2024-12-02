import { FormEvent } from "react"


import "../styles/styles.css"
import { useForm } from "../hooks/useForm"

export const RegisterPage = () => {

    const { handleValidateEmail, formData, handleOnChange, name, email, password1, password2, handleReset } = useForm({
        name: 'Luciano',
        email: 'rubia@gmail.com',
        password1: '',
        password2: ''
    })



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
                    className={`${name.trim().length <= 0 && 'has-error'} `}
                />

                {name.trim().length <= 0 && <span>Este Campo es Obligatorio</span>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) => handleOnChange(event)}
                    className={`${!handleValidateEmail(email) && 'has-error'} `}


                />
                {!handleValidateEmail(email) && <span>Email no Valido</span>}

                <input
                    type="password"
                    placeholder="Paswword"
                    name="password1"
                    value={password1}
                    onChange={(event) => handleOnChange(event)}

                />
                {password1.trim().length <= 0 && <span>Este Campo es Obligatorio</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>Minimo 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Confrim Password"
                    name="password2"
                    value={password2}
                    onChange={(event) => handleOnChange(event)}

                />
                {password2.trim().length <= 0 && <span>Este Campo es Obligatorio</span>}
                {password2.trim().length <= 0 && <span>Este Campo es Obligatorio</span>}
                {password2 !== password1 && <span>Las contraseñas deben ser iguales</span>}

                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}
