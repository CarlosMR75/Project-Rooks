import { Schema, model } from "mongoose";

const checkInSchema = new Schema({
    IdEmpleado: {
        type: Number,
        required: true,
        trim: true
    },
    Fecha: {
        type: String,
        required: true,
    },
    Hora: {
        type: String,
        required: true,
    },
    Tipo: {
        type: String,
        required: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('CheckIn', checkInSchema);