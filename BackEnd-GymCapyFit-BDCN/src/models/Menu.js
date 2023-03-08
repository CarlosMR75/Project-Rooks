import { Schema, model } from "mongoose";

const menuSchema = new Schema({
    IdMenu: {
        type: Number,
        required: true,
        trim: true
    },
    Nombre: {
        type: String,
        required: true,
        trim: true
    },
    Privilegios: [{
        type: String,
        required: true,
        trim: true
    }]
}, {
    versionKey: false,
    timestamps: true
});

export default model('Menu', menuSchema);