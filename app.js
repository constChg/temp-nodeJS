// npm ## global command, comes with node 
// npm --version

// local dependency ## use it only in this particular project
// npm i <dependencyName>

// global dependency ## use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> ## for Mac

// package.json ## manifest file (store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems);