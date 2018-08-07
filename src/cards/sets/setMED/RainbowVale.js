"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainbowVale extends UnimplementedCard {
  constructor (game) {
    super(game, "Rainbow Vale", "Masters Edition", "MED");
  }
}

module.exports = RainbowVale;
