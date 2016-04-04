"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinFestival extends Card {
  constructor(game) {
    super(game, "Goblin Festival", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinFestival;
