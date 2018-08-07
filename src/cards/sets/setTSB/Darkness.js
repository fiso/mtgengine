"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Darkness extends UnimplementedCard {
  constructor (game) {
    super(game, "Darkness", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Darkness;
