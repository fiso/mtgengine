"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbitionsCost extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambition's Cost", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = AmbitionsCost;
