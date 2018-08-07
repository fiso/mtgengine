"use strict";
const Constants = require ("../../../Constants");
const WolfBase = require("../setTA25/Wolf");

class Wolf extends WolfBase {
  constructor (game) {
    super(game, "Wolf", "Shadowmoor Tokens", "TSHM");
  }
}

module.exports = Wolf;
