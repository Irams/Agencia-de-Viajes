import express from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje 
} from "../controllers/paginasControllers.js";

const router = express.Router();

router.get ('/', paginaInicio);

router.get ('/nosotros', paginaNosotros);

router.get ('/viajes', paginaViajes);

router.get ('/viajes/:slugViaje', paginaDetalleViaje);

router.get ('/testimoniales', paginaTestimoniales);

export default router;