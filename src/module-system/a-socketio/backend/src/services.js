const version = require('./service/version.js');
const io = require('./service/io.js');
const messageClass = require('./service/messageClass.js');

module.exports = app => {
  const services = {
    version,
    io,
    messageClass,
  };
  return services;
};