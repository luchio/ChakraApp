const Yup = require('yup')

const formSchema = Yup.object({
    username: Yup.string().required("Usuario requerido").min(6,"Usuario demasiado corto")
    .max(28,"Usuario demasiado largo!"),
    password: Yup.string().required("Password requerido").min(6,"Password demasiado corto")
    .max(28,"Password demasiado largo!")
})

module.exports = {formSchema}