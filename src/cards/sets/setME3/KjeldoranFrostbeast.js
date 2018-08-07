"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranFrostbeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Frostbeast", "Masters Edition III", "ME3");
  }
}

module.exports = KjeldoranFrostbeast;
