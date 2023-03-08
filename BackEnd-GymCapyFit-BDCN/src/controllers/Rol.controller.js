import Rol from "../models/Rol";

export const findAllRol = async (req, res) => {
    const allRol = await Rol.find();
    res.json(allRol);
}

export const findOneRol = async (req, res) => {
    const oneRol = await Rol.findById(req.params.id);
    res.json(oneRol);
}

export const findRolIdRol = async (req, res) => {
    const RolIdRol = await Rol.find(req.params.IdRol);
    res.json(RolIdRol);
}

export const createRol = async (req, res) => {
    const newRol = new Rol({
        IdRol: req.body.IdRol,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Privilegios: req.body.Privilegios
    });
    const rolSaved = await newRol.save();
    res.json(rolSaved);
}

export const deleteRol = async (req, res) => {
    await Rol.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Rol were deleted succesfully'
    });
}

export const updateRol = async (req, res) => {
    await Rol.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Rol was updated successfully"
    });
}