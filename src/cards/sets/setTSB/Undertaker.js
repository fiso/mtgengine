"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undertaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Undertaker", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Undertaker;
