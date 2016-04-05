"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrovaxAscendantHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Crovax, Ascendant Hero", "Planar Chaos", "PLC");
  }
}

module.exports = CrovaxAscendantHero;
