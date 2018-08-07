"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CheeringFanatic extends UnimplementedCard {
  constructor (game) {
    super(game, "Cheering Fanatic", "Battlebond", "BBD");
  }
}

module.exports = CheeringFanatic;
