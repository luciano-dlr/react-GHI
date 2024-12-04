
import "../styles//styles.css"

export const FormikBasePage = () => {
  return (
    <div>
      <h1>Formik Base</h1>

      <form noValidate>
        <label htmlFor="firstName">Frist Name</label>
        <input
          type="text"
          name="firstName"
        />
        <span>FirstName is Required</span>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
        />
        <span>LastName is Required</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
        />
        <span>Email is Required</span>
        <span>Check Valid Email</span>


        <button type="submit">Submit</button>

      </form>

    </div>
  )
}
