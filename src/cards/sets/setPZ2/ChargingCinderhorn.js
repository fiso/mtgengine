"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingCinderhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Cinderhorn", "You Make the Cube", "PZ2");
  }
}

module.exports = ChargingCinderhorn;
