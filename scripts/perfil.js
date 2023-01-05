const mongoose = require('mongoose')
const perfilSchema = new mongoose.Schema({
    userId: { type: String },
    Name: { type: String },
    Coins: { type: Number },
    Bank: { type: Number },
    Total: { type: Number },
    Married: { type: String },
    Reps: { type: Number },
    XP: { type: Number },
    userCmds: { type: Number },
    Gender: { type: String },
    EmbedColor: { type: String },
    Works: { type: Number },
    Cooldowns: {
        Daily: {type: Number},
        Hourly: {type: Number},
        Rob: {type: Number},
        Supporter: {type: Number},
        Work: {type: Number},
        Rep: {type: Number}
    },
    Daily: {
        Total: {type: Number},
        Streak: {type: Number},
        Gained: {type: Number}
    },
    Fishing: {
        Fishes: { type: Number },
        Rod: { type: Number },
        Uses: { type: Number },
        Xp: { type: Number },
        Level: { type: Number }
    },
    Bonus: {
        Bet: { type: Number }
    },
    Inventory: {
        Balance: {
            Equiped: { type: Number },
            Owned: []
        },
        Background: {
            Equiped: { type: Number },
            Owned: []
        },
        Layout: {
            Equiped: { type: Number },
            Owned: []
        },
    }
})

const perfilModel = module.exports = mongoose.model('perfil', perfilSchema);;