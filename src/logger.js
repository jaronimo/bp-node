'use strict';

const config = require('config').get('logging');
const debug = require('debug');
const VSLogger = require('@vivintsolar/vs-logger');

const { logger } = new VSLogger(logging);

module.exports = function Log(name) {
  const log = {
    log: logger.info.bind(logger),
    warn: logger.warn.bind(logger),
    info: logger.info.bind(logger),
    error: logger.error.bind(logger),
    debug: debug(`${config.prefix}:${name}`),
  };

  return log;
};
