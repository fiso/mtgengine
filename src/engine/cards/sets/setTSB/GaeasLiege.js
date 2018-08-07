"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Liege", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GaeasLiege;
