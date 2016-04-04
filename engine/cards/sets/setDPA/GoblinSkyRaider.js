"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSkyRaider extends Card {
  constructor(game) {
    super(game, "Goblin Sky Raider", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GoblinSkyRaider;
