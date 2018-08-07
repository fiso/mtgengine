"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisMoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Moat", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = TeferisMoat;
