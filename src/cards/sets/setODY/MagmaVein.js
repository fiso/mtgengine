"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaVein extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Vein", "Odyssey", "ODY");
  }
}

module.exports = MagmaVein;
