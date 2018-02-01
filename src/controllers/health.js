'use strict';

const config = require('config');
const os = require('os');
const pkg = require('../../package');
const pretty = require('pretty-bytes');

module.exports = {
  getHealth() {
    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    const percentageMemory = freeMemory / totalMemory;

    return {
      name: pkg.name,
      env: process.env.NODE_ENV,
      version: pkg.version,
      host: config.server.host,
      port: config.server.port,
      dependencies: pkg.dependencies,
      systemInfo: {
        cpuLoad: os.loadavg(),
        memory: {
          free: {
            pretty: pretty(freeMemory),
            raw: freeMemory,
          },
          total: {
            pretty: pretty(totalMemory),
            raw: totalMemory,
          },
          percentage: {
            pretty: `${percentageMemory.toFixed(2)}%`,
            raw: percentageMemory,
          },
        },
      },
    }
  }
};
