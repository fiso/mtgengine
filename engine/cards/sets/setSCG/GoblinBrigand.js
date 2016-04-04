"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBrigandBase = require("../set9ED/GoblinBrigand.js");

class GoblinBrigand extends GoblinBrigandBase {
  constructor(game) {
    super(game, "Goblin Brigand", "Scourge", "SCG");
  }
}

module.exports = GoblinBrigand;
