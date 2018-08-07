"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChirurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Chirurgeon", "Masters Edition", "MED");
  }
}

module.exports = GoblinChirurgeon;
