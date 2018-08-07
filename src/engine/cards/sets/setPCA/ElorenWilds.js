"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElorenWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Eloren Wilds", "Planechase Anthology", "PCA");
  }
}

module.exports = ElorenWilds;
