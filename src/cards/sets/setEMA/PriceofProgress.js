"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriceofProgress extends UnimplementedCard {
  constructor (game) {
    super(game, "Price of Progress", "Eternal Masters", "EMA");
  }
}

module.exports = PriceofProgress;
