"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinArchaeologist extends Card {
  constructor(game) {
    super(game, "Goblin Archaeologist", "Darksteel", "DST");
  }
}

module.exports = GoblinArchaeologist;
