import Menu from "../models/Menu";

export const findAllMenu = async (req, res) => {
    const allMenu = await Menu.find();
    res.json(allMenu);
}

export const findOneMenu = async (req, res) => {
    const oneMenu = await Menu.findById(req.params.id);
    res.json(oneMenu);
}

export const findMenuIdMenu = async (req, res) => {
    const MenuIdMenu = await Menu.find(req.params.IdMenu);
    res.json(MenuIdMenu);
}

export const createMenu = async (req, res) => {
    const newMenu = new Menu({
        IdMenu: req.body.IdMenu,
        Nombre: req.body.Nombre,
        Privilegios: req.body.Privilegios
    });
    const menuSaved = await newMenu.save();
    res.json(menuSaved);
}

export const deleteMenu = async (req, res) => {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Menu were deleted succesfully'
    });
}

export const updateMenu = async (req, res) => {
    await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Menu was updated successfully"
    });
}