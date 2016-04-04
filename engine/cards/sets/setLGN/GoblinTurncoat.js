"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTurncoat extends Card {
  constructor(game) {
    super(game, "Goblin Turncoat", "Legions", "LGN");
  }
}

module.exports = GoblinTurncoat;
