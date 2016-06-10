"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VowofFlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Vow of Flight", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofFlight;
