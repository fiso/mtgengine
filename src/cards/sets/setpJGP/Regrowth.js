"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor(game) {
    super(game, "Regrowth", "Judge Gift Program", "pJGP");
  }
}

module.exports = Regrowth;
