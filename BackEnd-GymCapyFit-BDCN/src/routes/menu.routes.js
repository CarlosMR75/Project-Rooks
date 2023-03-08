import { Router } from "express";

import * as menuController from "../controllers/Menu.controller";

const router = Router();

router.get('/', menuController.findAllMenu);

router.get('/:id', menuController.findOneMenu);

router.post('/', menuController.createMenu);

router.delete('/:id', menuController.deleteMenu);

router.get('/IdMenu/:id', menuController.findMenuIdMenu);

router.put('/:id', menuController.updateMenu);

export default router