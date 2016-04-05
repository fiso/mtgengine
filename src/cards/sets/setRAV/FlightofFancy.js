"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlightofFancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Flight of Fancy", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlightofFancy;
