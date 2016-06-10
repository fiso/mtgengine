"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranFrostbeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Frostbeast", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranFrostbeast;
