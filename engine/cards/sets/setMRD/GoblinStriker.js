"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinStriker extends Card {
  constructor(game) {
    super(game, "Goblin Striker", "Mirrodin", "MRD");
  }
}

module.exports = GoblinStriker;
