"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinAssassin extends Card {
  constructor(game) {
    super(game, "Goblin Assassin", "Legions", "LGN");
  }
}

module.exports = GoblinAssassin;
