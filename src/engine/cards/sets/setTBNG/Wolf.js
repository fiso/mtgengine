"use strict";
const Constants = require ("../../../Constants");
const WolfBase = require("../setTA25/Wolf");

class Wolf extends WolfBase {
  constructor (game) {
    super(game, "Wolf", "Born of the Gods Tokens", "TBNG");
  }
}

module.exports = Wolf;
