console.log('Starting lookup app.');

const dns = require('dns');

dns.lookup('npmjs.org', (err, addresses, family) => {
  console.log('addresses:', addresses);
});
