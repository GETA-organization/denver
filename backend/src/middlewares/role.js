const User = require('../models/User');
const Role = require('../models/Role');

async function role (req, res, next){
    const id = req.id;
    
    const user = await User.findOne({ 
        where: { id },
        include: [{
            model: Role,
            as: 'role'
        }]
    });

    try {
        req.decoded = {
            role: user.role.tag
        }

        return next();
    } catch (err) {
        console.log(err);
        return res.status(401).send('Error with role'); 
    }
}

module.exports = role;