"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTurncoat extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Turncoat", "Legions", "LGN");
  }
}

module.exports = GoblinTurncoat;
