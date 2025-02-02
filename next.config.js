const nextPWA = require('next-pwa');
const cache = require('./scripts/cache');

const withPWA = nextPWA({
    // target: process.env.NETLIFY ? 'serverless' : 'server',
    // mode: process.env.NODE_ENV ?? 'development',
    dest: 'public'
});

module.exports = withPWA({
    swcMinify: true,

    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        runtimeCaching: cache
    }
});
