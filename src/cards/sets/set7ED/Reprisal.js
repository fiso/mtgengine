"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setJOU/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "Seventh Edition", "7ED");
  }
}

module.exports = Reprisal;
