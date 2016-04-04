"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrossbowInfantryBase = require("../set8ED/CrossbowInfantry.js");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor(game) {
    super(game, "Crossbow Infantry", "Seventh Edition", "7ED");
  }
}

module.exports = CrossbowInfantry;
