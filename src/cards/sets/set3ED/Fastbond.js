"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setCED/Fastbond");

class Fastbond extends FastbondBase {
  constructor (game) {
    super(game, "Fastbond", "Revised Edition", "3ED");
  }
}

module.exports = Fastbond;
