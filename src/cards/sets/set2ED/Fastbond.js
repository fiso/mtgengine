"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setCED/Fastbond");

class Fastbond extends FastbondBase {
  constructor (game) {
    super(game, "Fastbond", "Unlimited Edition", "2ED");
  }
}

module.exports = Fastbond;
