"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow Mercy", "Happy Holidays", "pHHO");
  }
}

module.exports = SnowMercy;
