"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnduringRenewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Enduring Renewal", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = EnduringRenewal;
