#! /usr/bin/env node

var chalk = require('chalk')
var git = require("nodegit")

console.log(chalk.green("Hello sworld"))

git.Repository.open("../Test NPM")
    .then(function(repo){
        git.Diff(repo, 
            "2e98d82bab97c6b7f419e182f74099dc53f8cc4b",
            "2e98d82bab97c6b7f419e182f74099dc53f8cc4b")
    });



