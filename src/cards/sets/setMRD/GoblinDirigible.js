"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDirigible extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Dirigible", "Mirrodin", "MRD");
  }
}

module.exports = GoblinDirigible;
