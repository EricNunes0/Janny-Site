const mongoconnect = connect(process.env.MONGO_URL).then((connected) => {
    console.log(`〔🌄〕MongoDB conectado!`);
});
this.db = {connection: mongoconnect}