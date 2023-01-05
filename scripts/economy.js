const { default: mongoose } = require('mongoose');
const mongo = require('./configs/mongo');
const perfilSchema = require("../scripts/daily");

module.exports.addCoins = async (userid, coins) => {
    return await mongo().then(async (mongoose) => {
        try {
            const result = await perfilSchema.findOneAndUpdate({userId: userid},
                {$inc: {"Coins": coins}},
                {upsert: true, new: true
            });
            return result.Coins;
        } finally {
            let perfil = await perfilSchema.findOne({userId: userid});
            const result = await perfilSchema.findOneAndUpdate({userId: userid},
                {"Total": parseInt(perfil.Coins) + parseInt(perfil.Bank)},
                {upsert: true,
            });
        }
    })
};