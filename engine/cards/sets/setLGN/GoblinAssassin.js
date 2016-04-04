"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Assassin", "Legions", "LGN");
  }
}

module.exports = GoblinAssassin;
