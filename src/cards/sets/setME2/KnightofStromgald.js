"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofStromgald extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Stromgald", "Masters Edition II", "ME2");
  }
}

module.exports = KnightofStromgald;
