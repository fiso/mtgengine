"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainStasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Chain Stasis", "Homelands", "HML");
  }
}

module.exports = ChainStasis;
