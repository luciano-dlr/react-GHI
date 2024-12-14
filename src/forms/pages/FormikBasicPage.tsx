import { FormikErrors, useFormik } from "formik"
import "../styles//styles.css"

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasePage = () => {

  const validate = ({ email, firstName, lastName }: FormValues) => {

    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'required';
    } else if (firstName.length > 15) {
      errors.firstName = 'Must have 15 characters or less'
    }

    if (!lastName) {
      errors.lastName = 'required';
    } else if (lastName.length > 10) {
      errors.lastName = 'Must have 15 characters or less'
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: 'Luciano',
      lastName: '',
      email: 'rubia@gmail.com',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  })

  return (
    <div>
      <h1>Formik Base</h1>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="firstName">Frist Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <span>FirstName is Required</span>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <span>LastName is Required</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span>Email is Required</span>
        <span>Check Valid Email</span>

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}
