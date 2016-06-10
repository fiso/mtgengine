"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SweepAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Sweep Away", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SweepAway;
