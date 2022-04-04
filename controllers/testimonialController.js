import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) =>{

    //Validar
    const {nombre,correo,mensaje}= req.body;

    const errores = [];

    if( nombre.trim() === '' ){
        errores.push({mensaje: 'el nombre esta vacío'});
    }
    if( correo.trim() === '' ){
        errores.push({mensaje: 'el correo esta vacío'});
    }
    if( mensaje.trim() === '' ){
        errores.push({mensaje: 'el mensaje esta vacío'});
    }

    if(errores.length>0){

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll()

        //Mostrar la vista y pasamos errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo, 
            mensaje,
            testimoniales
        })
    }else {

        //almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }

    }
}

export{
    guardarTestimonial
}