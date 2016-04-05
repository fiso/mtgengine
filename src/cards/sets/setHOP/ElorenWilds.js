"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElorenWilds extends UnimplementedCard {
  constructor(game) {
    super(game, "Eloren Wilds", "Planechase", "HOP");
  }
}

module.exports = ElorenWilds;
