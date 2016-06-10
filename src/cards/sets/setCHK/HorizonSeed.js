"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorizonSeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Horizon Seed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HorizonSeed;
