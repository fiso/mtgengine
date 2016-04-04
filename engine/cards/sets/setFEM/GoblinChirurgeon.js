"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinChirurgeon extends Card {
  constructor(game) {
    super(game, "Goblin Chirurgeon", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinChirurgeon;
