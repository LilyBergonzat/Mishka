// Of course this is copy-pasted from Stack Overflow!
// https://stackoverflow.com/a/7751977/3551909
global.TWO_WEEKS = 12096e5;
global.SECOND = 1000;
global.MINUTE = 60 * SECOND;
global.HOUR = 60 * MINUTE;
global.DAY = 24 * HOUR;
global.WEEK = 7 * DAY;

global.sleep = milliseconds => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
};
