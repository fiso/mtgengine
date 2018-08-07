"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvalancheRiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Avalanche Riders", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = AvalancheRiders;
