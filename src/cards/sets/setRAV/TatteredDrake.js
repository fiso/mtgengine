"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TatteredDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Tattered Drake", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TatteredDrake;
