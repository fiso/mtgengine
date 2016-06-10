"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmyAnts extends UnimplementedCard {
  constructor (game) {
    super(game, "Army Ants", "Visions", "VIS");
  }
}

module.exports = ArmyAnts;
