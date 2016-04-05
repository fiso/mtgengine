"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChirurgeon extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Chirurgeon", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinChirurgeon;
