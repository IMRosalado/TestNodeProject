#! /usr/bin/env node


var chalk = require('chalk')
var cmd = require('node-cmd');
var Promise = require('bluebird')

// cmd.get(`cd ..\\ & git status
// `, function(err,data,stderr){
//     console.log(chalk.red(err));
//     console.log(chalk.green(data));
//     console.log(chalk.yellow(stderr));
// }).on('close', function(){

// console.log(chalk.blue("-----------END-------------"));
// })
// console.log(chalk.cyan("------------------------"));



const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
 
getAsync('git --git-dir=.gitTwo diff --name-only 2e98d82bab97c6b7f419e182f74099dc53f8cc4b').then(function(data){
    
    console.log(decodeURI(data[0]))
}).catch(err => {
  console.log('cmd err', err)
})


