"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsecrateLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Consecrate Land", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = ConsecrateLand;
