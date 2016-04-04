"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWardriver extends Card {
  constructor(game) {
    super(game, "Goblin Wardriver", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GoblinWardriver;
