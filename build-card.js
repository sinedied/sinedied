const fs = require('fs');
const chalk = require('chalk');
const boxen = require('boxen');
const pkg = require('./package.json');

const text = chalk`Yohan Lasorsa / {cyan @sinedied}                       {dim 【ツ】}

{bold     Work:} Senior Cloud {italic Developer} Advocate @ Microsoft
{bold   GitHub:} {cyan https://github.com/sinedied}
{bold  Twitter:} {cyan https://twitter.com/sinedied}
{bold   Dev.to:} {cyan https://dev.to/sinedied}
{bold LinkedIn:} {cyan https://linkedin.com/in/yohanlasorsa/}

{bold     Card:} $ npx ${pkg.name}`;

const card = boxen(text, { padding: 1, borderColor: 'blue' });

fs.writeFileSync('text', card);
