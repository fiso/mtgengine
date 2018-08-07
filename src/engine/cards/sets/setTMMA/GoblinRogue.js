"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRogue extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Rogue", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = GoblinRogue;
