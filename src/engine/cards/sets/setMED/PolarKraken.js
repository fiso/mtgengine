"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolarKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Polar Kraken", "Masters Edition", "MED");
  }
}

module.exports = PolarKraken;
