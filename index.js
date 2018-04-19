#! /usr/bin/env node

var chalk = require('chalk')
var git = require("nodegit-kit")

console.log(chalk.green("Hello sworld"))

git.open("../Test NPM")
    .then(function(repo){
        return git.log(repo, { sort: 'reverse' })
            .then(function(history){
                var commit1 = history[0].commit;
                var commit2 = history[1].commit;
                // git diff <from> <to>
                return git.diff(repo, commit1, commit2);
            })
            .then(function(diff){
                console.log(diff);
            });
    });



