import { Router } from "express";

import * as rolController from "../controllers/Rol.controller";

const router = Router();

router.get('/', rolController.findAllRol);

router.get('/:id', rolController.findOneRol);

router.post('/', rolController.createRol);

router.delete('/:id', rolController.deleteRol);

router.get('/IdRol/:id', rolController.findRolIdRol);

router.put('/:id', rolController.updateRol);

export default router