"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Wings", "Scourge", "SCG");
  }
}

module.exports = DragonWings;
