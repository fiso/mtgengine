"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinKites extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Kites", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinKites;
