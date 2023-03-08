import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
    IdEmpleado: {
        type: Number,
        required: true,
        trim: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Edad: {
        type: Number,
        required: true,
        trim: true
    },
    Rol: [{
        type: String,
        required: true,
        trim: true
    }],
    Telefono: [{
        type: Number,
        required: true,
        trim: true
    }],
    Sueldo: {
        type: Number,
        required: true,
        trim: true
    },
    Turno: {
        type: String,
        required: true,
        trim: true
    },
    Correo: {
        type: String,
        required: true,
        trim: true
    },
    Contraseña: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Empleado', empleadoSchema);