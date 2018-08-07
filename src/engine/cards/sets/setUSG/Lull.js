"use strict";
const Constants = require ("../../../Constants");
const LullBase = require("../setA25/Lull");

class Lull extends LullBase {
  constructor (game) {
    super(game, "Lull", "Urza's Saga", "USG");
  }
}

module.exports = Lull;
