console.log('Starting lookup app.');

const dns = require('dns');

dns.lookup('www.dashiell.com', (err, addresses, family) => {
  console.log('addresses:', addresses);
});
