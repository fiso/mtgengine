"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitnesstheEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Witness the End", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WitnesstheEnd;
