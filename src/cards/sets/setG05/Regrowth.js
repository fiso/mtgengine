"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setA25/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "Judge Gift Cards 2005", "G05");
  }
}

module.exports = Regrowth;
