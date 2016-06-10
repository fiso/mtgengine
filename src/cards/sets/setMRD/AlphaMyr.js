"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Alpha Myr", "Mirrodin", "MRD");
  }
}

module.exports = AlphaMyr;
