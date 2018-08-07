"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalladiumMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Palladium Myr", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = PalladiumMyr;
