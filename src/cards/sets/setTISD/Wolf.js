"use strict";
const Constants = require ("../../../Constants");
const WolfBase = require("../setTA25/Wolf");

class Wolf extends WolfBase {
  constructor (game) {
    super(game, "Wolf", "Innistrad Tokens", "TISD");
  }
}

module.exports = Wolf;
