"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinOffensive extends Card {
  constructor(game) {
    super(game, "Goblin Offensive", "Anthologies", "ATH");
  }
}

module.exports = GoblinOffensive;
