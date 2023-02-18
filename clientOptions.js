const { Partials, IntentsBitField } = require('discord.js');

const partials = [
    Partials.ThreadMember,
    Partials.User,
    Partials.GuildScheduledEvent,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.Message,
];

const intents = [
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
];

module.exports = { partials, intents };
