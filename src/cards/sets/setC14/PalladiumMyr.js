"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalladiumMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Palladium Myr", "Commander 2014", "C14");
  }
}

module.exports = PalladiumMyr;
