"use strict";
const Constants = require ("../../../Constants");
const WhaleBase = require("../setTA25/Whale");

class Whale extends WhaleBase {
  constructor (game) {
    super(game, "Whale", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Whale;
