require('dotenv/config');

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

module.exports =  {
    async store (req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(404).send('User not found')    
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);

        if(!isPasswordCorrect){
            return res.status(401).send('Wrong password!'); 
        }

        return res.json({
            token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
                expiresIn: '7d'
            })
        })
    }
    
}