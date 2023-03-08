import { Router } from "express";

import * as checkInController from "../controllers/CheckIn.controller";

const router = Router();

router.get('/', checkInController.findAllCheckIn);

router.get('/:id', checkInController.findOneCheckIn);

router.post('/', checkInController.createCheckIn);

router.delete('/:id', checkInController.deleteCheckIn);

router.get('/IdEmpleado/:id', checkInController.findCheckInIdEmpleado);

router.put('/:id', checkInController.updateCheckIn);

export default router