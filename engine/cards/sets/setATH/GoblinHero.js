"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinHero extends Card {
  constructor(game) {
    super(game, "Goblin Hero", "Anthologies", "ATH");
  }
}

module.exports = GoblinHero;
