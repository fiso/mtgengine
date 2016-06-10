"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranPhalanx extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Phalanx", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranPhalanx;
