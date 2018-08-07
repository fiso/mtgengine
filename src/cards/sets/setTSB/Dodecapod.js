"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dodecapod extends UnimplementedCard {
  constructor (game) {
    super(game, "Dodecapod", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Dodecapod;
