"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setA25/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "Vintage Masters", "VMA");
  }
}

module.exports = Regrowth;
