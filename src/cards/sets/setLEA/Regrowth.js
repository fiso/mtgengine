"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Regrowth;
