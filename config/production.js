'use strict';

module.exports = {
    credstash: {
        table: 'credentials-production'
    },

    aws: {
        config: {
            region: 'us-west-2',
        },
    },

    agent_enabled: false,
    license_key: 'credstash:VS.Newrelic.license',
    logging: {
        level: 'info',
    },
};
