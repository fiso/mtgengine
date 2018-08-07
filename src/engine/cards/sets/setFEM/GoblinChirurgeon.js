"use strict";
const Constants = require ("../../../Constants");
const GoblinChirurgeonBase = require("../setMED/GoblinChirurgeon");

class GoblinChirurgeon extends GoblinChirurgeonBase {
  constructor (game) {
    super(game, "Goblin Chirurgeon", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinChirurgeon;
