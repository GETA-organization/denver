const Role = require("../models/Role");

module.exports = {
    async index (req, res){
        const { id } = req.params;
        
        const role = await Role.findAll({ where: { user: id } });

        return res.json(role);
    },
    async store (req, res) {
        const { tag, name } = req.body;

        const role = await Role.create({ tag, name });

        return res.json(role);
    },
    async update (req, res) {
        const { id } = req.params;
        const { tag, name } = req.body;

        const role = await Role.findOne({ where: { id } });

        role.update({ tag, name });

        role.save();

        return res.json(role); 
    },
}