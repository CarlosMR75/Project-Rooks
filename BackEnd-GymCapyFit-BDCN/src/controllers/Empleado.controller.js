import Empleado from "../models/Empleado";

export const findAllEmpleado = async (req, res) => {
    const allEmpleado = await Empleado.find();
    res.json(allEmpleado);
}

export const findOneEmpleado = async (req, res) => {
    const oneEmpleado = await Empleado.findById(req.params.id);
    res.json(oneEmpleado);
}

export const findEmpleadoIdEmpleado = async (req, res) => {
    const EmpleadoIdEmpleado = await Empleado.find(req.params.IdEmpleado);
    res.json(EmpleadoIdEmpleado);
}

export const createEmpleado = async (req, res) => {
    const newEmpleado = new Empleado({
        IdEmpleado: req.body.IdEmpleado,
        Nombre: req.body.Nombre,
        Edad: req.body.Edad,
        Rol: req.body.Rol,
        Telefono: req.body.Telefono,
        Sueldo: req.body.Sueldo,
        Turno: req.body.Turno,
        Correo: req.body.Correo,
        Contraseña: req.body.Contraseña
    });
    const empleadoSaved = await newEmpleado.save();
    res.json(empleadoSaved);
}

export const deleteEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Empleado were deleted succesfully'
    });
}

export const updateEmpleado = async (req, res) => {
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Empleado was updated successfully"
    });
}