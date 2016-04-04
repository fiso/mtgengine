"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor(game) {
    super(game, "Regrowth", "Masters Edition IV", "ME4");
  }
}

module.exports = Regrowth;
