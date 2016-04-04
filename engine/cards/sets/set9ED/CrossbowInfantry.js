"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrossbowInfantryBase = require("../set8ED/CrossbowInfantry.js");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor(game) {
    super(game, "Crossbow Infantry", "Ninth Edition", "9ED");
  }
}

module.exports = CrossbowInfantry;
