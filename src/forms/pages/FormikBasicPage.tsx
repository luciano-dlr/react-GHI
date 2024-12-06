import { useFormik } from "formik"
import "../styles//styles.css"

export const FormikBasePage = () => {

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: 'Luciano',
      lastName: '',
      email: 'rubia@gmail.com',
    },
    onSubmit: (values) => {
      console.log(values);
    }
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
