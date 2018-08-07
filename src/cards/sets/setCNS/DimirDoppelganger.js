"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirDoppelganger extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Doppelganger", "Conspiracy", "CNS");
  }
}

module.exports = DimirDoppelganger;
