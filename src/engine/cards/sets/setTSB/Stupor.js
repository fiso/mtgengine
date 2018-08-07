"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stupor extends UnimplementedCard {
  constructor (game) {
    super(game, "Stupor", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Stupor;
