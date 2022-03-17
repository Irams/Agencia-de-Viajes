import express from "express";

const router = express.Router();

router.get ('/', (req,resp)=>{
    resp.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get ('/nosotros', (req,resp)=>{
    const pagina = 'Nosotros';
    resp.render('nosotros',{
        pagina
    });

router.get ('/viajes',(req,resp)=>{
    resp.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get ('/testimoniales', (req,resp)=>{
    resp.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});
});

export default router;