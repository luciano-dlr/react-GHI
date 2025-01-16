import { useFormik } from "formik"
import * as Yup from "Yup"
import "../styles//styles.css"

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {


  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Maximo 15 caracteres')
        .required('Requerido'),
      lastName: Yup.string()
        .max(15, 'Maximo 15 caracteres')
        .required('Requerido'),
      email: Yup.string()
        .required('Requerido')
        .email('Debe ser un Formato Valido')
    })
  })

  return (
    <div>
      <h1 draggable>Formik Base</h1>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="firstName">Frist Name</label>
        <input
          type="text"
          onBlur={handleBlur}
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          onBlur={handleBlur}
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && <span>{errors.email}</span>}


        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
