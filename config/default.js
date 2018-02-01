'use strict';

module.exports = {
    credstash: {
        table: 'credentials-staging'
      },

      aws: {
        config: {
          region: 'us-west-2',
        },
      },

      logging: {
          prefix: 'temp'
      },

      newrelic: {
        app_name: [ 'template-basic', process.env.NODE_ENV ],
        agent_enabled: false,
      },

      server: {
        host: 'localhost',
        port: '8080'
      },
};
