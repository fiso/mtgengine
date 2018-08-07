"use strict";
const Constants = require ("../../../Constants");
const AbductionBase = require("../set6ED/Abduction");

class Abduction extends AbductionBase {
  constructor (game) {
    super(game, "Abduction", "Weatherlight", "WTH");
  }
}

module.exports = Abduction;
