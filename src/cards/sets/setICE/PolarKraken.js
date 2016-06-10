"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolarKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Polar Kraken", "Ice Age", "ICE");
  }
}

module.exports = PolarKraken;
