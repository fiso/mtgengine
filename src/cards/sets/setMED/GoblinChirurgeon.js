"use strict";
const Constants = require ("../../../Constants");
const GoblinChirurgeonBase = require("../setFEM/GoblinChirurgeon");

class GoblinChirurgeon extends GoblinChirurgeonBase {
  constructor (game) {
    super(game, "Goblin Chirurgeon", "Masters Edition", "MED");
  }
}

module.exports = GoblinChirurgeon;
