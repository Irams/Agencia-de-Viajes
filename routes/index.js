import express from "express";

const router = express.Router();

router.get ('/', (req,resp)=>{
    resp.render('inicio');
});
router.get ('/nosotros', (req,resp)=>{
    const pagina = 'nosotros';
    resp.render('nosotros',{
        pagina
    });
});

export default router;