const { Client } = require('discord.js');
const { Logger } = require('@lilywonhalf/pretty-logger');

require('dotenv').config();
require('./datetime');

const client = new Client(require('./clientOptions'));

client.on('ready', async client => {
    await require('./probe')(client);
    client.destroy();
    process.exit(0);
});

client.login(process.env.TOKEN).catch(Logger.exception);
