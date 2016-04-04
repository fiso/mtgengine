"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinVandal extends Card {
  constructor(game) {
    super(game, "Goblin Vandal", "Anthologies", "ATH");
  }
}

module.exports = GoblinVandal;
