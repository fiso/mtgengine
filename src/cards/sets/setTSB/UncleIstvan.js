"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncleIstvan extends UnimplementedCard {
  constructor (game) {
    super(game, "Uncle Istvan", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = UncleIstvan;
