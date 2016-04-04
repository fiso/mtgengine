"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinKites extends Card {
  constructor(game) {
    super(game, "Goblin Kites", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinKites;
