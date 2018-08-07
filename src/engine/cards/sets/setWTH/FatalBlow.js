"use strict";
const Constants = require ("../../../Constants");
const FatalBlowBase = require("../set6ED/FatalBlow");

class FatalBlow extends FatalBlowBase {
  constructor (game) {
    super(game, "Fatal Blow", "Weatherlight", "WTH");
  }
}

module.exports = FatalBlow;
