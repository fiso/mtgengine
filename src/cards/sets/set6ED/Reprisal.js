"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setJOU/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Reprisal;
