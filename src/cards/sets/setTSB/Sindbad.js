"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sindbad extends UnimplementedCard {
  constructor (game) {
    super(game, "Sindbad", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Sindbad;
