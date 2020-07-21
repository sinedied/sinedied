const fs = require('fs');
const path = require('path');

const card = fs.readFileSync(path.join(__dirname, 'text'), 'utf8');
module.exports = card;
