//  GLOBAL

//  __dirname    - current directory path
//  __filename   - file name
//  require      - function to use module (common JS)
//  module       - info about current module (file)
//  process      - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('hello world');
}, 1000);