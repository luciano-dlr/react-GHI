import { ChangeEvent, useState } from "react"
import "../styles/styles.css"

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })
    const { name, email, password1, password2 } = registerData

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);

        const { name, value } = event.target


        setRegisterData(oldRegisterData => ({
            ...oldRegisterData,
            [name]: value
        }))


    }

    return (
        <div>
            <h1>Register Page</h1>
            <form >
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
                    type="password1"
                    placeholder="Paswword"
                    name="password1"
                    value={password1}
                    onChange={(event) => handleOnChange(event)}

                />
                <input
                    type="password2"
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
