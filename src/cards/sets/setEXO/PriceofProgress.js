"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriceofProgress extends UnimplementedCard {
  constructor (game) {
    super(game, "Price of Progress", "Exodus", "EXO");
  }
}

module.exports = PriceofProgress;
