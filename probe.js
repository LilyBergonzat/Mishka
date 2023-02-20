const fs = require('fs');
const { Logger } = require('@lilywonhalf/pretty-logger');
const config = require('./probesConfig');

const performActionIfAny = async (snowflake) => {
    if (!fs.existsSync(`actions/${snowflake}.js`)) {
        return;
    }

    try {
        await require(`./actions/${snowflake}`)();
    } catch (error) {
        Logger.exception(error);
    }
};

const probe = async (client, snowflake, config) => {
    const bot = await client.users.fetch(snowflake).catch(Logger.exception);

    if (!bot) {
        Logger.error(`User ${snowflake} (${bot.tag}) could not be found.`);
        return;
    }

    if (!bot.bot) {
        Logger.error(`User ${snowflake} (${bot.tag}) is not a bot.`);
        return;
    }

    let working = false;

    try {
        working = await config.probe(client, snowflake);
    } catch(error) {
        Logger.error(error.message);
    }

    if (working) {
        Logger.info(`Bot ${bot.tag} working!`);
    } else {
        Logger.error(`Bot ${bot.tag} is not working!`);
        await performActionIfAny(snowflake);
    }
};

module.exports = (client) => {
    return Promise.all(Object.keys(config).map(snowflake => probe(client, snowflake, config[snowflake])));
};
