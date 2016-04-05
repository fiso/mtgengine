"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinStriker extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Striker", "Mirrodin", "MRD");
  }
}

module.exports = GoblinStriker;
