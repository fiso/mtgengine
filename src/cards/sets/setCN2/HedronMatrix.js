"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedron Matrix", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HedronMatrix;
