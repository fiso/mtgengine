"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SophicCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Sophic Centaur", "Planar Chaos", "PLC");
  }
}

module.exports = SophicCentaur;
