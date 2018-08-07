"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disintegrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Disintegrate", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Disintegrate;
