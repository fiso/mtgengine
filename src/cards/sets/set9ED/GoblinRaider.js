"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Raider", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinRaider;
