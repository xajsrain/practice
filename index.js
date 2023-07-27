const dotenv = require('dotenv')
console.log('# start---------')
const conf = dotenv.config({debug: true,override: true}).parsed;
// console.log(conf);
// console.log('---------')
// const buf = Buffer.from('say=hello')
// const bufRes = dotenv.parse(buf)
// console.log(bufRes)
// console.log('---------')
// const buf = Buffer.from('hello world')
// const opt = { debug: true }
// const config = dotenv.parse(buf, opt)
// console.log(config)
console.log('---------')
// const aa = { gd: 'jackli', acc: 111 };
// const conf = dotenv.populate(process.env, aa)
console.log(process.env)
console.log('# end---------')

