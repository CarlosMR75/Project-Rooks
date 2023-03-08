import express from "express";
import morgan from "morgan";
import cors from "cors";

import CheckIn from "./routes/checkIn.routes";
import Empleado from "./routes/empleado.routes";
import Menu from "./routes/menu.routes";
import Rol from "./routes/rol.routes";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' });
});

app.use('/api/checkin', CheckIn);
app.use('/api/empleado', Empleado);
app.use('/api/menu', Menu);
app.use('/api/rol', Rol);

export default app