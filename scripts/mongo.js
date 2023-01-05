const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`)
dotenv.config()
const MONGO_URL = process.env.MONGO_URL;

module.exports = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}