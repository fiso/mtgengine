"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PirateShip extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate Ship", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = PirateShip;
