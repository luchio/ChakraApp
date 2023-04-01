const Yup = require('yup')

const formSchema = Yup.object({
    username: Yup.string().required("Usuario requerido").min(6,"Usuario demasiado corto")
    .max(28,"Usuario demasiado largo!"),
    password: Yup.string().required("Password requerido").min(6,"Password demasiado corto")
    .max(28,"Password demasiado largo!")
})

const validateForm = (req,res,next) =>{
    const formData = req.body;
    //devuelve una promesa
    formSchema.validate(formData)
    .catch(()=>{
        res.status(422).send();
        console.log(err.errors);
    }).then(valid=> {
        if(valid) {
            //res.status(200).send();
            console.log('form is good');
            next();
    } else {
        res.status(422).send();
    }
})
}

module.exports = validateForm;