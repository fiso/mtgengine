"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "Revised Edition", "3ED");
  }
}

module.exports = Regrowth;
