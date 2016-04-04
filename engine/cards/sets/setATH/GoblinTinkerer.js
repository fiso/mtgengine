"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTinkerer extends Card {
  constructor(game) {
    super(game, "Goblin Tinkerer", "Anthologies", "ATH");
  }
}

module.exports = GoblinTinkerer;
