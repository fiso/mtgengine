"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedron Matrix", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HedronMatrix;
