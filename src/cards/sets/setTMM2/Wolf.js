"use strict";
const Constants = require ("../../../Constants");
const WolfBase = require("../setTA25/Wolf");

class Wolf extends WolfBase {
  constructor (game) {
    super(game, "Wolf", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Wolf;
