"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setA25/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Regrowth;
