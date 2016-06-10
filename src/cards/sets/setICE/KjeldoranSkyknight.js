"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranSkyknight extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Skyknight", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranSkyknight;
