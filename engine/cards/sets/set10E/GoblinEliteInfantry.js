"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinEliteInfantryBase = require("../set6ED/GoblinEliteInfantry.js");

class GoblinEliteInfantry extends GoblinEliteInfantryBase {
  constructor(game) {
    super(game, "Goblin Elite Infantry", "Tenth Edition", "10E");
  }
}

module.exports = GoblinEliteInfantry;
