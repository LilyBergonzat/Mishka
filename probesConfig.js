const fs = require('fs');

const probeList = {};

fs.readdirSync('./probes/').filter(file => {
    return file.slice(file.lastIndexOf('.')).toLowerCase() === '.js';
}).map(file => {
    const snowflake = file.slice(0, file.lastIndexOf('.'));

    probeList[snowflake] = { probe: require(`./probes/${snowflake}`) };
});

module.exports = probeList;
