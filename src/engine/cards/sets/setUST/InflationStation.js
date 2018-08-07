"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InflationStation extends UnimplementedCard {
  constructor (game) {
    super(game, "Inflation Station", "Unstable", "UST");
  }
}

module.exports = InflationStation;
