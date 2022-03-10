#!/usr/bin/env node

const cow = require("cowsay");
const colors = require("colors");

function sayHi() {
    console.log(
        cow.say({
            text: "hello world mooowww",
            e: "oO",
            T: " U",
        }).rainbow
    );
}

module.exports.sayHi = sayHi;
