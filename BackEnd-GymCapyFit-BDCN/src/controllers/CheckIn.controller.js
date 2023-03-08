import CheckIn from "../models/CheckIn";

export const findAllCheckIn = async (req, res) => {
    const allCheckIn = await CheckIn.find();
    res.json(allCheckIn);
}

export const findOneCheckIn = async (req, res) => {
    const oneCheckIn = await CheckIn.findById(req.params.id);
    res.json(oneCheckIn);
}

export const findCheckInIdEmpleado = async (req, res) => {
    const IdEmpleadoCheckIn = await CheckIn.find(req.params.IdEmpleado);
    res.json(IdEmpleadoCheckIn);
}

export const createCheckIn = async (req, res) => {
    const newCheckIn = new CheckIn({
        IdEmpleado: req.body.IdEmpleado,
        Fecha: req.body.Fecha,
        Hora: req.body.Hora,
        Tipo: req.body.Tipo
    });
    const checkInSaved = await newCheckIn.save();
    res.json(checkInSaved);
}

export const deleteCheckIn = async (req, res) => {
    await CheckIn.findByIdAndDelete(req.params.id);
    res.json({
        message: 'CheckIn were deleted succesfully'
    });
}

export const updateCheckIn = async (req, res) => {
    await CheckIn.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "CheckIn was updated successfully"
    });
}