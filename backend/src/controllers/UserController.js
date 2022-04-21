const User = require("../models/User");
const Role = require("../models/Role");

module.exports = {
    async index (req, res){
        const users = await User.findAll();

        return res.json(users);
    },
    async currentUser (req, res){
        const id = req.id;

        const user = await User.findOne({ where: { id }});
    
        return res.json(user);
    },
    async store (req, res) {
        const { name, age, email, password, image, birthdate } = req.body;

        const defaultRole = await Role.findOne({
            where: { tag: 'user' }
        });

        const user = await User.create({ name, age, email, password, image, birthdate, role_id: defaultRole.id });

        return res.json(user);
    },
    async update (req, res){
        const { id } = req.params;
        const { name, age, email, password, image, role } = req.body;

        const user = await User.findOne({ where:{ id } });

        if(!user){
            return res.status(401).send('User not found');
        }

        user.update({ name, age, email, password, image, role });

        user.save();

        return res.json(user);
    },
    async delete(req, res){
        const { id } = req.params;

        const user = User.findOne({ where:{ id } });

        if(!user){
            return res.status(401).send('User not found');
        }

        user.destroy();

        return res.send(`User ${id} deleted.`);
    }
}