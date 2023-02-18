const getCollectionItem = (collection, key) => {
    const item = collection.get(key);

    if (!item) {
        throw new Error(`The item ${key} could not be found.`);
    }

    return item;
};

const getGuild = (client, snowflake) => {
    try {
        return getCollectionItem(client.guilds.cache, snowflake);
    } catch (error) {
        throw new Error(`The guild ${snowflake} could not be found.`);
    }
};

const getChannel = async (guild, snowflake) => {
    try {
        return getCollectionItem(await guild.channels.fetch(), snowflake);
    } catch (error) {
        throw new Error(`The channel ${snowflake} could not be found.`);
    }
};

module.exports = { getCollectionItem, getGuild, getChannel };