const { createLogger, format, transports } = require('winston');
const moment = require('moment');
var path = require('path');

module.exports = createLogger({
transports:
    new transports.File({
    filename: path.join(__dirname, `./logs/${moment().format('DD-MMM-YYYY')}/Activity-${moment().format('hha')}.log`),
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
});