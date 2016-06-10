"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Raider", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinRaider;
