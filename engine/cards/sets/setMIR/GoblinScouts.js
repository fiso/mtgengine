"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinScouts extends Card {
  constructor(game) {
    super(game, "Goblin Scouts", "Mirage", "MIR");
  }
}

module.exports = GoblinScouts;
