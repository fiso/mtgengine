"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Tyrant", "Scourge", "SCG");
  }
}

module.exports = DragonTyrant;
